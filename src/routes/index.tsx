import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import MeetingPage from '../pages/meeting';
import PageLayout from '../components/layout/PageLayout';

interface AppRoutesProps {
  isAuthenticated: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  return (
    <Routes>
      {/* 인증 관련 */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/" replace />
          ) : (
            <LoginPage onSuccess={() => navigate('/')} />
          )
        }
      />

      {/* 메인 페이지 */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <PageLayout title="내 운동 모임">
              <HomePage />
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* 모임 관련 */}
      <Route
        path="/meetings/:id"
        element={
          isAuthenticated ? (
            <PageLayout title="모임 상세 화면">
              <MeetingPage />
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/meetings/create"
        element={
          isAuthenticated ? (
            <PageLayout title="모임 만들기">
              <div className="px-4 py-4">
                <p className="text-gray-600">모임 생성 페이지 (개발 중)</p>
              </div>
            </PageLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* 404 페이지 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
