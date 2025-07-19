import React from 'react';
import type { Meeting } from '../../../types/meeting';
import MeetingCard from './MeetingCard';

interface MeetingCardListProps {
  meetings: Meeting[];
}

const MeetingCardList: React.FC<MeetingCardListProps> = ({ meetings }) => (
  <div className="space-y-5 px-2">
    {meetings.map(meeting => (
      <MeetingCard key={meeting.id} meeting={meeting} />
    ))}
  </div>
);

export default MeetingCardList; 