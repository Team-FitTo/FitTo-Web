import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface CreateChallengeFormProps {
  meetingId: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const CreateChallengeForm: React.FC<CreateChallengeFormProps> = ({
  meetingId,
  onSuccess,
  onCancel,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    reward: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = '챌린지 제목을 입력해주세요';
    } else if (formData.title.length < 2) {
      newErrors.title = '챌린지 제목은 2자 이상이어야 합니다';
    }

    if (!formData.startDate) {
      newErrors.startDate = '시작일을 선택해주세요';
    }

    if (!formData.endDate) {
      newErrors.endDate = '종료일을 선택해주세요';
    }

    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (start < today) {
        newErrors.startDate = '시작일은 오늘 이후여야 합니다';
      }

      if (end <= start) {
        newErrors.endDate = '종료일은 시작일 이후여야 합니다';
      }

      const diffDays = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays > 30) {
        newErrors.endDate = '챌린지 기간은 최대 30일까지 가능합니다';
      }
    }

    if (!formData.reward.trim()) {
      newErrors.reward = '보상을 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: 실제 API 호출로 교체
      const challengeData = {
        meetingId,
        title: formData.title.trim(),
        description: formData.description.trim(),
        startDate: formData.startDate,
        endDate: formData.endDate,
        reward: formData.reward.trim(),
      };

      console.log('Creating challenge:', challengeData);

      // 임시로 성공 처리
      setTimeout(() => {
        onSuccess?.();
      }, 1000);
    } catch {
      setErrors({ submit: '챌린지 생성 중 오류가 발생했습니다.' });
    } finally {
      setIsLoading(false);
    }
  };

  // 최소 시작일 (오늘)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          새 챌린지 만들기
        </h2>
        <p className="text-sm text-gray-600">
          모임원들과 함께 도전할 챌린지를 만들어보세요
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="챌린지 제목"
          placeholder="챌린지 제목을 입력하세요"
          value={formData.title}
          onChange={value => handleInputChange('title', value)}
          error={errors.title}
          disabled={isLoading}
        />

        <Input
          type="text"
          label="챌린지 설명 (선택사항)"
          placeholder="챌린지에 대한 설명을 입력하세요"
          value={formData.description}
          onChange={value => handleInputChange('description', value)}
          error={errors.description}
          disabled={isLoading}
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              시작일
            </label>
            <input
              type="date"
              value={formData.startDate}
              onChange={e => handleInputChange('startDate', e.target.value)}
              min={today}
              disabled={isLoading}
              className={`
                w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base
                ${errors.startDate ? 'border-red-500' : 'border-gray-300'}
                ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
              `}
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              종료일
            </label>
            <input
              type="date"
              value={formData.endDate}
              onChange={e => handleInputChange('endDate', e.target.value)}
              min={formData.startDate || today}
              disabled={isLoading}
              className={`
                w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base
                ${errors.endDate ? 'border-red-500' : 'border-gray-300'}
                ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
              `}
            />
            {errors.endDate && (
              <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
            )}
          </div>
        </div>

        <Input
          type="text"
          label="보상"
          placeholder="예: 커피 쿠폰, 상품권 등"
          value={formData.reward}
          onChange={value => handleInputChange('reward', value)}
          error={errors.reward}
          disabled={isLoading}
        />

        {errors.submit && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{errors.submit}</p>
          </div>
        )}

        <div className="flex space-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={onCancel}
            disabled={isLoading}
          >
            취소
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="flex-1"
            disabled={isLoading}
          >
            {isLoading ? '생성 중...' : '챌린지 만들기'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateChallengeForm;
