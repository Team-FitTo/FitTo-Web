import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import type { Meeting } from '../../types/meeting';
import BarbellIcon from '../../assets/Barbell.svg';
import ExerciseIcon from '../../assets/Exercise.svg';
import BicycleIcon from '../../assets/Bicycle.svg';
import VectorIcon from '../../assets/Vector.svg';

// 이건 굳이 상관없는건데, 현재 구조상 page/home/HomePage.tsx 파일인데
// 나중에 페이지 구조가 커지면 src/pages/home/index.tsx 같은 식으로
// index.tsx 파일을 만들어서 export default HomePage; 형태로
// 페이지 컴포넌트를 내보내는게 좋을 것 같음
// 아니면 src/pages/HomePage.tsx 같은 식으로
// 페이지 컴포넌트 파일을 따로 만들어도 괜찮을 듯?

// 예시 카테고리 데이터
const categories = [
  {
    id: 1,
    label: '달리러 하니',
    icon: <img src={ExerciseIcon} alt="달리기" className="w-[33px] h-[33px]" />,
    selected: false,
  },
  {
    id: 2,
    label: '우리는 헬복동',
    icon: <img src={BicycleIcon} alt="자전거" className="w-[33px] h-[33px]" />,
    selected: false,
  },
  {
    id: 3,
    label: '헬창들',
    icon: <img src={BarbellIcon} alt="헬스" className="w-[33px] h-[33px]" />,
    selected: true,
  },
];

// 홈 페이지 이건 나중에 리팩토링 하겠지만
// 난 보통 List , ListItem, ListContainer 같은 컴포넌트를 만들어서
// 리스트를 구성하는데, 지금은 간단하게 Card 컴포넌트를 사용
// 나중에 Card 컴포넌트가 커지면 List 컴포넌트를 만들어서
// Card 컴포넌트를 ListItem로 사용하고, ListContainer 컴포넌트를 만들어서
// 전체 리스트를 감싸는 구조로 변경해야 할 것 같음
// 그리고 카테고리 버튼도 나중에 컴포넌트로 분리하면 좋을 듯

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
    <div className="flex flex-col items-center min-h-screen pt-6 bg-brand-bg">
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
            <span
              className={`w-[50px] h-[50px] flex items-center justify-center rounded-full text-xl mb-1 bg-white border-[3px] ${cat.selected ? 'border-brand-main' : 'border-status-inactive'}`}
            >
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
          <button className="px-3 py-1 text-xs font-medium border rounded-full border-brand-main text-brand-main">
            필터
          </button>
        </div>
        {/* 카드 리스트 */}
        <div className="space-y-3">
          {meetings.map(meeting => (
            <Card
              key={meeting.id}
              className="flex items-center justify-between p-4 bg-brand-bg2 rounded-2xl"
            >
              <div>
                <h3 className="mb-1 text-base font-semibold text-gray-900">
                  {meeting.name}
                </h3>
                <p className="text-xs text-gray-500">{meeting.description}</p>
                <div className="mt-1 text-xs text-gray-400">
                  {meeting.memberCount}/{meeting.maxMembers}
                </div>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                {/* 카테고리 원 */}
                <span className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-white border-[3px] border-brand-main mb-2">
                  {meeting.workoutType === '조깅' && (
                    <img
                      src={ExerciseIcon}
                      alt="조깅"
                      className="w-[20px] h-[20px]"
                    />
                  )}
                  {meeting.workoutType === '자전거' && (
                    <img
                      src={BicycleIcon}
                      alt="자전거"
                      className="w-[20px] h-[20px]"
                    />
                  )}
                  {meeting.workoutType === '헬스' && (
                    <img
                      src={BarbellIcon}
                      alt="헬스"
                      className="w-[20px] h-[20px]"
                    />
                  )}
                </span>
                {/* 입장 버튼 */}
                <Link
                  to={`/meeting/${meeting.id}`}
                  className="mt-2 text-sm font-semibold text-brand-main"
                >
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
