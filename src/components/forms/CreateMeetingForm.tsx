import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import useMeeting from '../../hooks/useMeeting';

interface CreateMeetingFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const CreateMeetingForm: React.FC<CreateMeetingFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const { createMeeting } = useMeeting();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    workoutType: '',
    maxMembers: '10',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const workoutTypes = [
    { value: '조깅', label: '조깅' },
    { value: '헬스', label: '헬스' },
    { value: '요가', label: '요가' },
    { value: '수영', label: '수영' },
    { value: '등산', label: '등산' },
    { value: '자전거', label: '자전거' },
    { value: '기타', label: '기타' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = '모임 이름을 입력해주세요';
    } else if (formData.name.length < 2) {
      newErrors.name = '모임 이름은 2자 이상이어야 합니다';
    }

    if (!formData.workoutType) {
      newErrors.workoutType = '운동 종류를 선택해주세요';
    }

    const maxMembers = parseInt(formData.maxMembers);
    if (isNaN(maxMembers) || maxMembers < 2 || maxMembers > 50) {
      newErrors.maxMembers = '최대 인원은 2-50명 사이여야 합니다';
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
      const result = await createMeeting({
        name: formData.name.trim(),
        description: formData.description.trim(),
        workoutType: formData.workoutType,
        memberCount: 1, // 생성자가 첫 번째 멤버
        maxMembers: parseInt(formData.maxMembers),
        memberIds: ['current-user-id'], // TODO: 실제 사용자 ID로 교체
      });

      if (result.success) {
        onSuccess?.();
      } else {
        setErrors({ submit: result.error || '모임 생성에 실패했습니다.' });
      }
    } catch {
      setErrors({ submit: '모임 생성 중 오류가 발생했습니다.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          새 모임 만들기
        </h2>
        <p className="text-sm text-gray-600">함께 운동할 모임을 만들어보세요</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="모임 이름"
          placeholder="모임 이름을 입력하세요"
          value={formData.name}
          onChange={value => handleInputChange('name', value)}
          error={errors.name}
          disabled={isLoading}
        />

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            운동 종류
          </label>
          <select
            value={formData.workoutType}
            onChange={e => handleInputChange('workoutType', e.target.value)}
            disabled={isLoading}
            className={`
              w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base
              ${errors.workoutType ? 'border-red-500' : 'border-gray-300'}
              ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
            `}
          >
            <option value="">운동 종류를 선택하세요</option>
            {workoutTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.workoutType && (
            <p className="mt-1 text-sm text-red-600">{errors.workoutType}</p>
          )}
        </div>

        <Input
          type="text"
          label="모임 설명 (선택사항)"
          placeholder="모임에 대한 설명을 입력하세요"
          value={formData.description}
          onChange={value => handleInputChange('description', value)}
          error={errors.description}
          disabled={isLoading}
        />

        <Input
          type="number"
          label="최대 인원"
          placeholder="최대 인원을 입력하세요"
          value={formData.maxMembers}
          onChange={value => handleInputChange('maxMembers', value)}
          error={errors.maxMembers}
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
            {isLoading ? '생성 중...' : '모임 만들기'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateMeetingForm;
