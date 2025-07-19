import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  onBack?: () => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
}) => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col max-w-[500px] w-full mx-auto">
      {/* 메인 콘텐츠 */}
      <main className={`flex-1`}>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
