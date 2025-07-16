import React from 'react';
import LoginForm from './components/LoginForm';

interface LoginPageProps {
  onSuccess?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSuccess }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4 py-8">
      <div className="w-full max-w-sm mx-auto">
        <LoginForm onSuccess={onSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
