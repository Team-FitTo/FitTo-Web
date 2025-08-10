import React from 'react';

interface CalendarHeaderProps {
  year: number;
  month: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  year,
  month,
  onPrevMonth,
  onNextMonth
}) => {
  return (
    <div className="w-full flex items-center justify-between mb-3">
      {/* 이전/다음 월 버튼 */}
      <button
        onClick={onPrevMonth}
        className="p-1 text-gray-600 hover:text-gray-800"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* 년도와 월 */}
      <h2 className="text-lg font-bold text-black">
        {year} {month}월
      </h2>
      
      {/* 다음 월 버튼 */}
      <button
        onClick={onNextMonth}
        className="p-1 text-gray-600 hover:text-gray-800"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CalendarHeader;
