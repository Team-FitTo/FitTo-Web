import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showProfile?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showProfile = true,
  onBack,
  rightAction,
}) => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [isClickedProfile, setIsClickedProfile] = useState(false);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleClickProfile = () => {
    setIsClickedProfile(!isClickedProfile);
    console.log('프로필 클릭됨');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-10 border-b shadow-sm bg-brand-bg">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 왼쪽 영역 */}
          <div className="flex items-center space-x-3">
            {showBack && (
              <button
                onClick={handleBack}
                className="p-2 -ml-2 text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          </div>

          {/* 오른쪽 영역 */}
          <div className="flex items-center space-x-2">
            {rightAction}
            {showProfile && user && (
              <div onClick={handleClickProfile} className="relative">
                <button className="flex items-center p-2 space-x-2 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                    <span className="text-sm font-medium text-white">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <span className="hidden text-sm text-gray-700 sm:block">
                    {user.name}
                  </span>
                </button>

                {/* 드롭다운 메뉴 */}
                {/* 상태 관리 추가해봤음 */}
                {isClickedProfile && (
                  <div className="absolute right-0 w-48 py-1 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    >
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
