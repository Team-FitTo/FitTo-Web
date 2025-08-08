import React from 'react';
import Card from '../../../components/ui/Card';
import MeetingCircleButton from './MeetingCircleButton';
import type { Meeting } from '../../../types/meeting';

interface MeetingCardProps {
  meeting: Meeting;
  onMeetingClick: (meeting: Meeting) => void;
}

const MeetingCard: React.FC<MeetingCardProps> = ({ meeting, onMeetingClick }) => (
  <Card className="px-4 py-2 bg-brand-bg2 rounded-[21px] flex items-center justify-between">
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-base font-semibold text-text-basic truncate">{meeting.name}</span>
        <span className="text-xs font-semibold text-text-basic ml-2 whitespace-nowrap">{meeting.memberCount}/{meeting.maxMembers}</span>
      </div>
      <p className="text-xs text-text-basic2 line-clamp-2">{meeting.description}</p>
    </div>
    <div className="flex flex-col items-center flex-shrink-0 ml-4">
      <MeetingCircleButton
        workoutType={meeting.workoutType as '조깅' | '자전거' | '헬스'}
        isWorkingOut={meeting.isWorkingOut}
        variant="other"
      />
      <button 
        onClick={() => onMeetingClick(meeting)} 
        className="text-brand-main font-semibold text-sm mt-2 whitespace-nowrap hover:underline"
      >
        입장 →
      </button>
    </div>
  </Card>
);

export default MeetingCard; 