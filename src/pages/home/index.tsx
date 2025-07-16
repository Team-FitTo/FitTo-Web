import React from 'react';
import MyMeetingsBar from './components/MyMeetingsBar';
import FilterButton from './components/FilterButton';
import MeetingCardList from './components/MeetingCardList';
import type { Meeting } from '../../types/meeting';
import myMeetingsData from '../../data/myMeetings.json';
import otherMeetingsData from '../../data/otherMeetings.json';
import { useNavigate } from 'react-router-dom';

const myMeetings: Meeting[] = (myMeetingsData as Array<Omit<Meeting, 'createdAt'> & { createdAt: string }>).map(m => ({
  ...m,
  createdAt: new Date(m.createdAt),
}));
const otherMeetings: Meeting[] = (otherMeetingsData as Array<Omit<Meeting, 'createdAt'> & { createdAt: string }>).map(m => ({
  ...m,
  createdAt: new Date(m.createdAt),
}));

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleMeetingClick = (meeting: Meeting) => {
    navigate(`/meeting/${meeting.id}`);
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center pt-6 px-[30px]">
      {/* 상단 내 미팅 버튼 영역 */}
      <MyMeetingsBar meetings={myMeetings} onAddMeeting={() => {}} onMeetingClick={handleMeetingClick} />
      {/* 카드 컨테이너 */}
      <div className="max-w-[400px] mx-auto bg-white rounded-t-[54px] px-6 pt-6 pb-0 flex-1 flex flex-col shadow-lg">
        {/* 필터 버튼 */}
        <FilterButton onClick={() => {}} />
        {/* 내가 들어가있지 않은 미팅 리스트 */}
        <MeetingCardList meetings={otherMeetings} />
      </div>
    </div>
  );
};

export default HomePage; 