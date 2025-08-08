import React, { useState, useEffect } from 'react';
import MeetingTimer from './components/MeetingTimer';
import MemberListPage from './MemberListPage';
import CalendarPage from './CalendarPage';
import ChallengePage from './ChallengePage';
import RankingPage from './RankingPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import type { MeetingDetail } from '../../types/meeting';

const MeetingPage: React.FC = () => {
  // 예시용 상태 (타이머, 목표시간, 재생여부)
  const [isPlaying, setIsPlaying] = useState(false);
  const [meetingInfo, setMeetingInfo] = useState<MeetingDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // 실제 타이머 로직은 추후 구현
  const currentTime = '00:00:00';
  const goalTime = '01:30:00';

  useEffect(() => {
    // 실제 API 호출로 교체 예정
    const fetchMeetingInfo = async () => {
      try {
        // TODO: 실제 API 호출로 교체
        // const response = await fetch(`/api/meetings/${meetingId}`);
        // const data = await response.json();
        
        // 현재는 모의 데이터 사용
        const mockMeetingInfo: MeetingDetail = {
          id: '1',
          name: '헬스 모임',
          workoutType: '헬스',
          description: '매일 아침 조깅하는 모임입니다.',
          maxMembers: 10,
          memberCount: 5,
          isWorkingOut: true,
          createdAt: new Date(),
          members: [],
          todayWorkoutTime: 3600,
        };
        
        setMeetingInfo(mockMeetingInfo);
      } catch (error) {
        console.error('Failed to fetch meeting info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeetingInfo();
  }, []);

  const handlePlayClick = () => {
    setIsPlaying((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className="h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-gray-500">모임 정보를 불러오는 중...</div>
      </div>
    );
  }

  if (!meetingInfo) {
    return (
      <div className="h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-gray-500">모임 정보를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-brand-bg flex flex-col items-center pt-[80px] pb-[60px] px-[35px]">
      {/* 상단 타이머/플레이어 영역 */}
      <MeetingTimer
        currentTime={currentTime}
        goalTime={goalTime}
        isPlaying={isPlaying}
        onPlayClick={handlePlayClick}
      />
      {/* 중앙 네모난 스와이퍼 컨테이너 */}
      <div className="w-full bg-white rounded-[54px] mt-[42px] flex-1 flex flex-col shadow-lg min-h-[420px] justify-center items-center">
        <Swiper
          className="w-full h-full"
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <MemberListPage workoutType={meetingInfo.workoutType} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <CalendarPage />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <ChallengePage />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <RankingPage />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MeetingPage; 