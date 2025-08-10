import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import type { CalendarDayData, MemberColor } from '../../../types/meeting';
import memberColorsDataJson from '../../../data/memberColors.json';
import calendarDataJson from '../../../data/calendarData.json';

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarData, setCalendarData] = useState<CalendarDayData[]>([]);
  const [memberColors, setMemberColors] = useState<MemberColor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제 API 호출로 교체 예정
    const fetchCalendarData = async () => {
      try {
        // TODO: 실제 API 호출로 교체
        // const response = await fetch(`/api/meetings/${meetingId}/calendar?year=${currentDate.getFullYear()}&month=${currentDate.getMonth() + 1}`);
        // const data = await response.json();
        
        // 현재는 정적 데이터 사용
        setCalendarData(calendarDataJson);
        setMemberColors(memberColorsDataJson);
      } catch (error) {
        console.error('Failed to fetch calendar data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCalendarData();
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-500">달력을 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col p-4">
      <Calendar
        year={currentDate.getFullYear()}
        month={currentDate.getMonth() + 1}
        calendarData={calendarData}
        memberColors={memberColors}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
    </div>
  );
};

export default CalendarPage;
