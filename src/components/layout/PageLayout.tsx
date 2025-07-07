import React from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  showHeader?: boolean;
  showBottomNav?: boolean;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  onBack?: () => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  showHeader = true,
  showBottomNav = true,
  showBack = false,
  rightAction,
  onBack,
}) => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col max-w-[500px] w-full mx-auto">
      {/* 헤더 */}
      {showHeader && (
        <Header
          title={title}
          showBack={showBack}
          rightAction={rightAction}
          onBack={onBack}
        />
      )}

      {/* 메인 콘텐츠 */}
      <main className={`flex-1 ${showBottomNav ? 'pb-10' : ''}`}>
        {children}
      </main>

      {/* 하단 네비게이션 */}
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default PageLayout;
