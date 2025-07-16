import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import MeetingCircleButton from './MeetingCircleButton';
import type { Meeting } from '../../../types/meeting';

interface MeetingCardProps {
  meeting: Meeting;
}

const MeetingCard: React.FC<MeetingCardProps> = ({ meeting }) => (
  <Card className="px-4 py-2 bg-brand-bg2 rounded-[21px] flex items-center justify-between">
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-gray-900 truncate">{meeting.name}</h3>
        <span className="text-xs font-semibold text-gray-900 ml-2 whitespace-nowrap">{meeting.memberCount}/{meeting.maxMembers}</span>
      </div>
      <p className="text-xs text-gray-500 line-clamp-2">{meeting.description}</p>
    </div>
    <div className="flex flex-col items-center flex-shrink-0 ml-4">
      <MeetingCircleButton
        workoutType={meeting.workoutType as '조깅' | '자전거' | '헬스'}
        isActive={meeting.isActive}
        variant="other"
      />
      <Link to={`/meeting/${meeting.id}`} className="text-brand-main font-semibold text-sm mt-2 whitespace-nowrap">
        입장 →
      </Link>
    </div>
  </Card>
);

export default MeetingCard; 