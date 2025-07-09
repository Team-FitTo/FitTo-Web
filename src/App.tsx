import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { useAuthStore, useAuthRestore } from './store/useAuthStore';

function App() {
  useAuthRestore(); // 앱 시작 시 localStorage에서 사용자 정보 복원
  const { isAuthenticated, isLoading } = useAuthStore();

  // 로딩 중일 때 스플래시 화면
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-b-2 border-blue-600 rounded-full animate-spin" />
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <AppRoutes isAuthenticated={isAuthenticated} />
      </div>
    </Router>
  );
}

export default App;
