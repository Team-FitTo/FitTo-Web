import React from 'react';
import { create } from 'zustand';
import type { AuthUser, LoginCredentials } from '../types/auth';

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
  loginWithKakao: () => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateUser: (updates: Partial<AuthUser>) => void;
  restore: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  // 앱 시작 시 localStorage에서 사용자 정보 복원
  restore: () => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        set({ user, isAuthenticated: true, isLoading: false });
      } catch {
        localStorage.removeItem('authUser');
        set({ user: null, isAuthenticated: false, isLoading: false });
      }
    } else {
      set({ isLoading: false });
    }
  },

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      // TODO: 실제 API 연동
      const mockUser: AuthUser = {
        id: '1',
        name: '테스트 사용자',
        email: credentials.email,
        profileImage: undefined,
        token: 'mock-token-' + Date.now(),
      };
      localStorage.setItem('authUser', JSON.stringify(mockUser));
      set({ user: mockUser, isAuthenticated: true, isLoading: false });
      return { success: true };
    } catch {
      set({ isLoading: false });
      return { success: false, error: '로그인에 실패했습니다.' };
    }
  },

  loginWithKakao: async () => {
    set({ isLoading: true });
    try {
      // TODO: 카카오 로그인 연동
      const mockUser: AuthUser = {
        id: '2',
        name: '카카오 사용자',
        email: 'kakao@example.com',
        profileImage: undefined,
        token: 'kakao-token-' + Date.now(),
      };
      localStorage.setItem('authUser', JSON.stringify(mockUser));
      set({ user: mockUser, isAuthenticated: true, isLoading: false });
      return { success: true };
    } catch {
      set({ isLoading: false });
      return { success: false, error: '카카오 로그인에 실패했습니다.' };
    }
  },

  logout: () => {
    localStorage.removeItem('authUser');
    set({ user: null, isAuthenticated: false, isLoading: false });
  },

  updateUser: (updates) => {
    const user = get().user;
    if (user) {
      const updatedUser = { ...user, ...updates };
      localStorage.setItem('authUser', JSON.stringify(updatedUser));
      set({ user: updatedUser });
    }
  },
}));

// 앱 시작 시 자동 복원용 헬퍼
export const useAuthRestore = () => {
  const restore = useAuthStore(state => state.restore);
  React.useEffect(() => {
    restore();
  }, [restore]);
}; 