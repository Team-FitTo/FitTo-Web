import React from 'react';
import WorkoutDot from './WorkoutDot';

interface CalendarDayProps {
  date: number;
  isCurrentMonth: boolean;
  workoutColors: string[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  isCurrentMonth,
  workoutColors
}) => {
  console.log(`CalendarDay ${date}:`, { isCurrentMonth, workoutColors }); // 디버깅용
  
  return (
    <div className={`min-h-[50px] border-r border-b border-gray-200 flex flex-col items-center justify-start p-1 ${
      isCurrentMonth ? 'text-black bg-white' : 'text-gray-300 bg-gray-50'
    }`}>
      {/* 날짜 */}
      <div className={`text-xs font-bold mb-1 ${
        isCurrentMonth ? 'text-black' : 'text-gray-400'
      }`}>
        {date}
      </div>
      
      {/* 운동 기록 점들 */}
      {workoutColors.length > 0 && (
        <div className="w-full h-7 overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-3 gap-1 justify-items-center">
            {workoutColors.map((color, index) => (
              <WorkoutDot key={index} color={color} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
