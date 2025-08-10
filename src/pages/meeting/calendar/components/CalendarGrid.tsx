import React from 'react';
import CalendarDay from './CalendarDay';
import type { CalendarDayData } from '../../../../types/meeting';

interface CalendarGridProps {
  year: number;
  month: number;
  calendarData: CalendarDayData[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  year,
  month,
  calendarData
}) => {
  // 해당 월의 첫 번째 날과 마지막 날 계산
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  
  // 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ...)
  const firstDayOfWeek = firstDay.getDay();
  
  // 이전 달의 마지막 날들
  const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
  
  // 달력에 표시할 모든 날짜 배열 생성
  const calendarDays: Array<{
    date: number;
    isCurrentMonth: boolean;
    workoutColors: string[];
  }> = [];
  
  // 이전 달의 날짜들 추가
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = prevMonthLastDay - i;
    calendarDays.push({
      date,
      isCurrentMonth: false,
      workoutColors: []
    });
  }
  
  // 현재 달의 날짜들 추가
  for (let date = 1; date <= lastDay.getDate(); date++) {
    const workoutData = calendarData.find(item => item.date === date);
    calendarDays.push({
      date,
      isCurrentMonth: true,
      workoutColors: workoutData ? workoutData.workoutColors : []
    });
  }
  
  // 다음 달의 날짜들 추가 (6주 완성)
  const remainingDays = 42 - calendarDays.length;
  for (let date = 1; date <= remainingDays; date++) {
    calendarDays.push({
      date,
      isCurrentMonth: false,
      workoutColors: []
    });
  }
  
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="w-full">
      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 mb-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-xs font-bold text-gray-600 py-2 border-gray-200">
            {day}
          </div>
        ))}
      </div>
      
      {/* 달력 그리드 */}
      <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
        {calendarDays.map((day, index) => (
          <CalendarDay
            key={index}
            date={day.date}
            isCurrentMonth={day.isCurrentMonth}
            workoutColors={day.workoutColors}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
