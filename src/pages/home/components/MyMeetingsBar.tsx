import React from 'react';
import MeetingCircleButton from './MeetingCircleButton';
import VectorIcon from '../../../assets/Vector.svg';
import type { Meeting } from '../../../types/meeting';

interface MyMeetingsBarProps {
  meetings: Meeting[];
  onAddMeeting?: () => void;
  onMeetingClick?: (meeting: Meeting) => void;
}

const MyMeetingsBar: React.FC<MyMeetingsBarProps> = ({ meetings, onAddMeeting, onMeetingClick }) => (
  <div className="w-full pl-4 max-w-[400px] flex gap-1 justify-start items-center overflow-x-auto whitespace-nowrap scrollbar-hide">
    {/* vector(추가) 버튼 */}
    <button className="mr-1 flex flex-col items-center focus:outline-none" onClick={onAddMeeting}>
      <span className="w-[55px] h-[55px] flex items-center justify-center rounded-full">
        <img src={VectorIcon} alt="추가" className="w-[55px] h-[55px]" />
      </span>
    </button>
    {/* 내 미팅 버튼들 */}
    {meetings.map((meeting) => {
      return (
        <div key={meeting.id} className="inline-flex flex-col items-center">
          <MeetingCircleButton
            workoutType={meeting.workoutType as '조깅' | '자전거' | '헬스'}
            isActive={meeting.isActive}
            variant="my"
            onClick={() => onMeetingClick?.(meeting)}
          />
          <span className={`max-w-[75px] truncate font-semibold text-xs mt-1 ${meeting.isActive ? 'text-brand-main' : 'text-gray-500'}`}>{meeting.name}</span>
        </div>
      );
    })}
  </div>
);

export default MyMeetingsBar; 