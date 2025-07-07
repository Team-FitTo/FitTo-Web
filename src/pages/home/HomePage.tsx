import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import type { Meeting } from '../../types/meeting';
import BarbellIcon from '../../assets/Barbell.svg';
import ExerciseIcon from '../../assets/Exercise.svg';
import BicycleIcon from '../../assets/Bicycle.svg';
import VectorIcon from '../../assets/Vector.svg';
import myMeetingsData from '../../data/myMeetings.json';
import otherMeetingsData from '../../data/otherMeetings.json';

const myMeetings: Meeting[] = (myMeetingsData as Array<Omit<Meeting, 'createdAt'> & { createdAt: string }>).map(m => ({
  ...m,
  createdAt: new Date(m.createdAt),
}));
const otherMeetings: Meeting[] = (otherMeetingsData as Array<Omit<Meeting, 'createdAt'> & { createdAt: string }>).map(m => ({
  ...m,
  createdAt: new Date(m.createdAt),
}));

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center pt-6 px-[30px]">
      {/* 상단 내 미팅 버튼 영역 */}
      <div className="w-full max-w-[400px] mx-auto flex gap-4 justify-start mb-6 items-center">
        {/* vector(추가) 버튼 */}
        <button className="flex flex-col items-center focus:outline-none">
          <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <img src={VectorIcon} alt="추가" className="w-[50px] h-[50px]" />
          </span>
        </button>
        {/* 내 미팅 버튼들 */}
        {myMeetings.map((meeting, idx) => {
          // 첫 번째 미팅만 선택된 상태로 예시
          const isSelected = idx === 2;
          return (
            <button
              key={meeting.id}
              className={`flex flex-col items-center focus:outline-none`}
            >
              <span className={`w-[50px] h-[50px] flex items-center justify-center rounded-full text-xl mb-1 bg-white border-[3px] ${isSelected ? 'border-brand-main' : 'border-status-inactive'}`}>
                {meeting.workoutType === '조깅' && <img src={ExerciseIcon} alt="조깅" className="w-[33px] h-[33px]" />}
                {meeting.workoutType === '자전거' && <img src={BicycleIcon} alt="자전거" className="w-[33px] h-[33px]" />}
                {meeting.workoutType === '헬스' && <img src={BarbellIcon} alt="헬스" className="w-[33px] h-[33px]" />}
              </span>
              <span className={`font-semibold text-xs mt-1 ${isSelected ? 'text-brand-main' : 'text-gray-500'}`}>{meeting.name}</span>
            </button>
          );
        })}
      </div>
      {/* 카드 컨테이너 */}
      <div className="max-w-[400px] mx-auto bg-white rounded-t-[54px] px-6 pt-6 pb-0 flex-1 flex flex-col shadow-lg">
        {/* 필터 버튼 */}
        <div className="flex justify-end mb-4">
          <button className="text-xs px-3 py-1 rounded-full border border-brand-main text-brand-main font-medium me-[27px]">
            필터
          </button>
        </div>
        {/* 내가 들어가있지 않은 미팅 리스트 */}
        <div className="space-y-5">
          {otherMeetings.map(meeting => (
            <Card key={meeting.id} className="px-4 py-2 bg-brand-bg2 rounded-[21px] flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-semibold text-gray-900 truncate">{meeting.name}</h3>
                  <span className="text-xs font-semibold text-gray-900 ml-2 whitespace-nowrap">{meeting.memberCount}/{meeting.maxMembers}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">{meeting.description}</p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0 ml-4">
                <span className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-white border-[3px] border-brand-main mb-2">
                  {meeting.workoutType === '조깅' && <img src={ExerciseIcon} alt="조깅" className="w-[20px] h-[20px]" />}
                  {meeting.workoutType === '자전거' && <img src={BicycleIcon} alt="자전거" className="w-[20px] h-[20px]" />}
                  {meeting.workoutType === '헬스' && <img src={BarbellIcon} alt="헬스" className="w-[20px] h-[20px]" />}
                </span>
                <Link to={`/meeting/${meeting.id}`} className="text-brand-main font-semibold text-sm mt-2 whitespace-nowrap">
                  입장 →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
