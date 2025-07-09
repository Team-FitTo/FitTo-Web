import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import HomePage from '../pages/home/HomePage';
import PageLayout from '../components/layout/PageLayout';

interface AppRoutesProps {
  isAuthenticated: boolean;
}

// 라우팅 구조는 좋은데 , not-found 페이지가 없어서
// 404 페이지를 추가하는게 좋을 것 같음

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
            // 이부분이 로그인 페이지 인데 <LoginForm /> 컴포넌트가 그대로 있는 것 보단
            // 페이지 파일을 따로 만들어서
            // 라우팅 구조를 좀 더 명확하게 하는게 좋을 것 같음
            // 예를 들어 src/pages/auth/LoginPage.tsx 같은 파일을 만들어서

            <div className="flex flex-col justify-center min-h-screen px-4 py-8 bg-brand-bg">
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

      {/* 지금 이게 404 처리가 된건가 잘 모르겟네 이 라우팅은 오랜만이라 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
