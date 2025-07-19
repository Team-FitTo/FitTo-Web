import React from 'react';
import PlayIcon from '../../../assets/btn_play.svg';

interface MeetingTimerProps {
  currentTime: string; // 왼쪽에 흐르는 시간
  goalTime: string;    // 오른쪽 목표 시간
  isPlaying: boolean;  // 재생 중 여부
  onPlayClick: () => void; // 재생 버튼 클릭 핸들러
}

const MeetingTimer: React.FC<MeetingTimerProps> = ({ currentTime, goalTime, isPlaying, onPlayClick }) => {
  return (
    <div className="w-full max-w-[400px] mx-auto flex flex-col items-center">
      <div className="flex items-center justify-center gap-6">
        <span className="text-brand-accent text-2xl font-semibold">{currentTime}</span>
        {/* play(재생) 버튼 */}
        <button className="flex flex-col items-center focus:outline-none" onClick={onPlayClick}>
          <span className="w-[60px] h-[60px] flex items-center justify-center rounded-full">
            <img src={PlayIcon} alt={isPlaying ? '일시정지' : '재생'} className="w-[60px] h-[60px]" />
          </span>
        </button>
        <span className="text-text-basic text-2xl font-semibold">{goalTime}</span>
      </div>
    </div>
  );
};

export default MeetingTimer; 