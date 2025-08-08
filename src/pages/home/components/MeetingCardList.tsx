import React from 'react';
import type { Meeting } from '../../../types/meeting';
import MeetingCard from './MeetingCard';

interface MeetingCardListProps {
  meetings: Meeting[];
  onMeetingClick: (meeting: Meeting) => void;
}

const MeetingCardList: React.FC<MeetingCardListProps> = ({ meetings, onMeetingClick }) => (
  <div className="space-y-5 px-2">
    {meetings.map(meeting => (
      <MeetingCard key={meeting.id} meeting={meeting} onMeetingClick={onMeetingClick} />
    ))}
  </div>
);

export default MeetingCardList; 