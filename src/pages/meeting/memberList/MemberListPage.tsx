import React, { useState, useEffect } from 'react';
import type { MeetingMember } from '../../../types/meeting';
import meetingMembersData from '../../../data/meetingMembers.json';

// 아이콘 imports
import RunningActive from '../../../assets/Running_active.svg';
import RunningInactive from '../../../assets/Running_inactive.svg';
import CyclingActive from '../../../assets/Cycling_active.svg';
import CyclingInactive from '../../../assets/Cycling_inactive.svg';
import BarbellActive from '../../../assets/Barbell_active.svg';
import BarbellInactive from '../../../assets/Barbell_inactive.svg';

interface MemberListPageProps {
  workoutType: string;
}

const MemberListPage: React.FC<MemberListPageProps> = ({ workoutType }) => {
  const [members, setMembers] = useState<MeetingMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제 API 호출로 교체 예정
    const fetchMembers = async () => {
      try {
        // TODO: 실제 API 호출로 교체
        // const response = await fetch(`/api/meetings/${meetingId}/members`);
        // const data = await response.json();
        
        // 현재는 정적 데이터 사용
        const mockMembers: MeetingMember[] = meetingMembersData;
        setMembers(mockMembers);
      } catch (error) {
        console.error('Failed to fetch members:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const formatWorkoutTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getWorkoutIcon = (isWorkingOut: boolean) => {
    switch (workoutType) {
      case '조깅':
      case 'running':
        return (
          <img 
            src={isWorkingOut ? RunningActive : RunningInactive} 
            alt="조깅" 
            className="w-[50px] h-[50px]"
          />
        );
      case '자전거':
      case 'bicycle':
      case 'cycling':
        return (
          <img 
            src={isWorkingOut ? CyclingActive : CyclingInactive} 
            alt="자전거" 
            className="w-[50px] h-[50px]"
          />
        );
      case '헬스':
      case 'weights':
      case 'barbell':
        return (
          <img 
            src={isWorkingOut ? BarbellActive : BarbellInactive} 
            alt="헬스" 
            className="w-[50px] h-[50px]"
          />
        );
      default:
        // 기본 아이콘 (요가, 수영, 등산 등)
        return (
          <img 
            src={isWorkingOut ? RunningActive : RunningInactive} 
            alt="운동" 
            className="w-[50px] h-[50px]"
          />
        );
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-500">멤버 목록을 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col p-4 overflow-y-auto scrollbar-hide">
      <div className="grid grid-cols-3 gap-4">
        {members.map((member) => {
          const isActive = member.isWorkingOut;
          const textColor = isActive ? 'text-status-active' : 'text-status-inactive';
          
          return (
            <div
              key={member.memberId}
              className="flex flex-col items-center justify-center space-y-2 p-4"
            >
              {/* 아이콘 */}
              <div className="flex items-center justify-center">
                {getWorkoutIcon(member.isWorkingOut)}
              </div>
              
              {/* 닉네임 */}
              <div className={`text-center ${textColor}`}>
                <div className="text-sm font-medium truncate max-w-[80px]">
                  {member.nickname}
                </div>
              </div>
              
              {/* 운동 시간 */}
              <div className={`text-xs font-medium ${textColor}`}>
                {formatWorkoutTime(member.todayWorkoutTime)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberListPage; 