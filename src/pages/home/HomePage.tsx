import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import type { Meeting } from '../../types/meeting';
import BarbellIcon from '../../assets/Barbell.svg';
import ExerciseIcon from '../../assets/Exercise.svg';
import BicycleIcon from '../../assets/Bicycle.svg';
import VectorIcon from '../../assets/Vector.svg';

// 예시 카테고리 데이터
const categories = [
  { id: 1, label: '달리러 하니', icon: <img src={ExerciseIcon} alt="달리기" className="w-[33px] h-[33px]" />, selected: false },
  { id: 2, label: '우리는 헬복동', icon: <img src={BicycleIcon} alt="자전거" className="w-[33px] h-[33px]" />, selected: false },
  { id: 3, label: '헬창들', icon: <img src={BarbellIcon} alt="헬스" className="w-[33px] h-[33px]" />, selected: true },
];

const HomePage: React.FC = () => {
  const [meetings] = useState<Meeting[]>([
    {
      id: '1',
      name: '조깅 모임',
      description: '매일 아침 조깅하는 모임입니다.',
      workoutType: '조깅',
      memberCount: 5,
      maxMembers: 10,
      createdAt: new Date(),
      createdBy: 'user1',
      memberIds: ['user1', 'user2', 'user3', 'user4', 'user5'],
    },
    {
      id: '2',
      name: '헬스 모임',
      description: '함께 헬스장에서 운동하는 모임입니다.',
      workoutType: '헬스',
      memberCount: 3,
      maxMembers: 8,
      createdAt: new Date(),
      createdBy: 'user2',
      memberIds: ['user1', 'user2', 'user3'],
    },
    {
      id: '3',
      name: '엄복동 모임',
      description: '박복동, 배복동, 김복동',
      workoutType: '자전거',
      memberCount: 3,
      maxMembers: 8,
      createdAt: new Date(),
      createdBy: 'user2',
      memberIds: ['user1', 'user2', 'user3'],
    },
  ]);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center pt-6">
      {/* 카테고리 버튼 */}
      <div className="flex gap-4 justify-start mb-6 w-full px-[30px] items-center">
        {/* vector(추가) 버튼 */}
        <button className="flex flex-col items-center focus:outline-none">
          <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <img src={VectorIcon} alt="추가" className="w-[50px] h-[50px]" />
          </span>
        </button>
        {/* 기존 카테고리 버튼들 */}
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`flex flex-col items-center focus:outline-none ${cat.selected ? 'text-brand-main' : 'text-gray-500'}`}
          >
            <span className={`w-[50px] h-[50px] flex items-center justify-center rounded-full text-xl mb-1 bg-white border-[3px] ${cat.selected ? 'border-brand-main' : 'border-status-inactive'}`}>
              {cat.icon}
            </span>
            <span className="text-xs">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* 카드 컨테이너 */}
      <div className="w-full max-w-[400px] bg-white rounded-t-[54px] px-5 pt-6 pb-0 flex-1 flex flex-col shadow-lg">
        {/* 필터 버튼 */}
        <div className="flex justify-end mb-4">
          <button className="text-xs px-3 py-1 rounded-full border border-brand-main text-brand-main font-medium">
            필터
          </button>
        </div>
        {/* 카드 리스트 */}
        <div className="space-y-3">
          {meetings.map(meeting => (
            <Card key={meeting.id} className="p-4 bg-brand-bg2 rounded-2xl flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{meeting.name}</h3>
                <p className="text-xs text-gray-500">{meeting.description}</p>
                <div className="text-xs text-gray-400 mt-1">{meeting.memberCount}/{meeting.maxMembers}</div>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                {/* 카테고리 원 */}
                <span className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-white border-[3px] border-brand-main mb-2">
                  {meeting.workoutType === '조깅' && <img src={ExerciseIcon} alt="조깅" className="w-[20px] h-[20px]" />}
                  {meeting.workoutType === '자전거' && <img src={BicycleIcon} alt="자전거" className="w-[20px] h-[20px]" />}
                  {meeting.workoutType === '헬스' && <img src={BarbellIcon} alt="헬스" className="w-[20px] h-[20px]" />}
                </span>
                {/* 입장 버튼 */}
                <Link to={`/meeting/${meeting.id}`} className="text-brand-main font-semibold text-sm mt-2">
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
