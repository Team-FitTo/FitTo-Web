import { useState, useEffect, useCallback } from 'react';
import type { Meeting, MeetingDetail, WorkoutRecord } from '../types/meeting';
import type { UserProfile } from '../types/user';

const useMeeting = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [currentMeeting, setCurrentMeeting] = useState<MeetingDetail | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  // 모임 목록 가져오기
  const fetchMeetings = useCallback(async () => {
    setIsLoading(true);
    try {
      // TODO: 실제 API 호출로 교체
      const mockMeetings: Meeting[] = [
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
      ];

      setMeetings(mockMeetings);
    } catch {
      console.error('Failed to fetch meetings');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 특정 모임 상세 정보 가져오기
  const fetchMeetingDetail = useCallback(async (meetingId: string) => {
    setIsLoading(true);
    try {
      // TODO: 실제 API 호출로 교체
      const mockMembers: UserProfile[] = [
        {
          id: 'user1',
          name: '김철수',
          profileImage: undefined,
          totalWorkoutTime: 120,
          todayWorkoutTime: 30,
          isWorkingOut: true,
        },
        {
          id: 'user2',
          name: '이영희',
          profileImage: undefined,
          totalWorkoutTime: 90,
          todayWorkoutTime: 45,
          isWorkingOut: false,
        },
        {
          id: 'user3',
          name: '박민수',
          profileImage: undefined,
          totalWorkoutTime: 150,
          todayWorkoutTime: 60,
          isWorkingOut: true,
        },
      ];

      const mockMeetingDetail: MeetingDetail = {
        id: meetingId,
        name: '조깅 모임',
        description: '매일 아침 조깅하는 모임입니다.',
        workoutType: '조깅',
        memberCount: 3,
        maxMembers: 10,
        createdAt: new Date(),
        createdBy: 'user1',
        members: mockMembers,
        todayGoalTime: 60,
        isActive: true,
      };

      setCurrentMeeting(mockMeetingDetail);
    } catch {
      console.error('Failed to fetch meeting detail');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 모임 생성
  const createMeeting = useCallback(
    async (meetingData: Omit<Meeting, 'id' | 'createdAt' | 'createdBy'>) => {
      try {
        // TODO: 실제 API 호출로 교체
        const newMeeting: Meeting = {
          ...meetingData,
          id: Date.now().toString(),
          createdAt: new Date(),
          createdBy: 'current-user-id', // TODO: 실제 사용자 ID로 교체
        };

        setMeetings(prev => [...prev, newMeeting]);
        return { success: true, meeting: newMeeting };
      } catch {
        return { success: false, error: '모임 생성에 실패했습니다.' };
      }
    },
    []
  );

  // 모임 참여
  const joinMeeting = useCallback(async (meetingId: string) => {
    try {
      // TODO: 실제 API 호출로 교체
      setMeetings(prev =>
        prev.map(meeting =>
          meeting.id === meetingId
            ? { ...meeting, memberCount: meeting.memberCount + 1 }
            : meeting
        )
      );
      return { success: true };
    } catch {
      return { success: false, error: '모임 참여에 실패했습니다.' };
    }
  }, []);

  // 운동 기록 추가
  const addWorkoutRecord = useCallback(
    async (record: Omit<WorkoutRecord, 'id'>) => {
      try {
        // TODO: 실제 API 호출로 교체
        const newRecord: WorkoutRecord = {
          ...record,
          id: Date.now().toString(),
        };

        console.log('Workout record added:', newRecord);
        return { success: true, record: newRecord };
      } catch {
        return { success: false, error: '운동 기록 추가에 실패했습니다.' };
      }
    },
    []
  );

  // 초기 데이터 로드
  useEffect(() => {
    fetchMeetings();
  }, [fetchMeetings]);

  return {
    meetings,
    currentMeeting,
    isLoading,
    fetchMeetings,
    fetchMeetingDetail,
    createMeeting,
    joinMeeting,
    addWorkoutRecord,
  };
};

export default useMeeting;
