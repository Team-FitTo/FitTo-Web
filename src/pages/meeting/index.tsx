import React, { useState } from 'react';
import MeetingTimer from './components/MeetingTimer';
import MemberListPage from './MemberListPage';
import CalendarPage from './CalendarPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MeetingPage: React.FC = () => {
  // 예시용 상태 (타이머, 목표시간, 재생여부)
  const [isPlaying, setIsPlaying] = useState(false);
  // 실제 타이머 로직은 추후 구현
  const currentTime = '00:00:00';
  const goalTime = '01:30:00';

  const handlePlayClick = () => {
    setIsPlaying((prev) => !prev);
  };

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
      <div className="w-full bg-white rounded-[54px] pt-6 pb-6 mt-[42px] flex-1 flex flex-col shadow-lg min-h-[420px] justify-center items-center">
        <Swiper
          className="w-full h-full"
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <MemberListPage />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <CalendarPage />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MeetingPage; 