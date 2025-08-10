import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import MemberLegend from './MemberLegend';
import type { CalendarDayData, MemberColor } from '../../../../types/meeting';

interface CalendarProps {
  year: number;
  month: number;
  calendarData: CalendarDayData[];
  memberColors: MemberColor[];
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  year,
  month,
  calendarData,
  memberColors,
  onPrevMonth,
  onNextMonth
}) => {
  return (
    <div className="w-full h-full flex flex-col p-4 overflow-y-auto scrollbar-hide">
      {/* 달력 헤더 */}
      <CalendarHeader
        year={year}
        month={month}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      
      {/* 달력 그리드 */}
      <div className="mt-4">
        <CalendarGrid
          year={year}
          month={month}
          calendarData={calendarData}
        />
      </div>
      
      {/* 멤버 범례 */}
      <div className="mt-4 pb-4">
        <MemberLegend memberColors={memberColors} />
      </div>
    </div>
  );
};

export default Calendar;
