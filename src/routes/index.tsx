import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import HomePage from '../pages/home/HomePage';
import PageLayout from '../components/layout/PageLayout';

interface AppRoutesProps {
  isAuthenticated: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/" replace />
          ) : (
            <div className="min-h-screen bg-brand-bg flex flex-col justify-center px-4 py-8">
              <LoginForm
                onSuccess={() => {
                  navigate('/');
                }}
                onError={error => {
                  console.error('Login error:', error);
                }}
              />
            </div>
          )
        }
      />

      <Route
        path="/"
        element={
          isAuthenticated ? (
            <PageLayout title="내 운동 모임" showBack={false}>
              <HomePage />
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/meetings"
        element={
          isAuthenticated ? (
            <PageLayout title="모임" showBack={true}>
              <div className="px-4 py-4 max-w-[500px] w-full">
                <p className="text-gray-600">모임 목록 페이지 (개발 중)</p>
              </div>
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/meeting/:id"
        element={
          isAuthenticated ? (
            <PageLayout title="모임 상세" showBack={true}>
              <div className="px-4 py-4">
                <p className="text-gray-600">모임 상세 페이지 (개발 중)</p>
              </div>
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/challenges"
        element={
          isAuthenticated ? (
            <PageLayout title="챌린지" showBack={true}>
              <div className="px-4 py-4">
                <p className="text-gray-600">챌린지 목록 페이지 (개발 중)</p>
              </div>
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/profile"
        element={
          isAuthenticated ? (
            <PageLayout title="프로필" showBack={true}>
              <div className="px-4 py-4">
                <p className="text-gray-600">프로필 페이지 (개발 중)</p>
              </div>
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/create-meeting"
        element={
          isAuthenticated ? (
            <PageLayout
              title="모임 만들기"
              showBack={true}
              showBottomNav={false}
            >
              <div className="px-4 py-4">
                <p className="text-gray-600">모임 생성 페이지 (개발 중)</p>
              </div>
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
