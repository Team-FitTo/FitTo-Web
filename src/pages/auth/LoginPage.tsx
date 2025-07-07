import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 에러 메시지 제거
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 유효성 검사
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = '이메일을 입력해주세요';
    if (!formData.password) newErrors.password = '비밀번호를 입력해주세요';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: 로그인 로직 구현
    console.log('로그인 시도:', formData);
  };

  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 구현
    console.log('카카오 로그인 시도');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4 py-8">
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">FitTo</h1>
          <p className="text-sm text-gray-600">함께 운동하는 즐거움</p>
        </div>

        <div className="bg-white py-6 px-4 shadow-sm rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="이메일"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={value => handleInputChange('email', value)}
              error={errors.email}
            />

            <Input
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={value => handleInputChange('password', value)}
              error={errors.password}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
            >
              로그인
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleKakaoLogin}
              >
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500 mr-2">카카오</span>
                  로그인
                </div>
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center space-y-2">
            <Link
              to="/signup"
              className="block text-blue-600 hover:text-blue-500 text-sm"
            >
              회원가입
            </Link>
            <Link
              to="/forgot-password"
              className="block text-blue-600 hover:text-blue-500 text-sm"
            >
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
