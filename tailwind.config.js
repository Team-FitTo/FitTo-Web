/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FitTo 브랜드 색상
        brand: {
          main: '#7B61FF',
          accent: '#A78BFA',
          bg: '#F7F6FD',
          bg2: '#EEE9FE',
        },
        // 소셜 로그인 색상
        social: {
          kakao: '#fee500', // 카카오 노란색
        },
        // 상태 색상
        status: {
          active: '#A78BFA', // 온라인
          inactive: '#B7B7B7', // 오프라인
        },
      },
      // 커스텀 폰트
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // 커스텀 애니메이션
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}

