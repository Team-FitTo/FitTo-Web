import type { Member } from './user';

export interface Meeting {
  id: string;
  name: string;
  workoutType: string;
  description?: string;
  maxMembers: number;
  memberCount: number;
  isWorkingOut: boolean;
  createdAt: Date;
}

export interface MeetingDetail {
  id: string;
  name: string;
  workoutType: string;
  description?: string;
  maxMembers: number;
  memberCount: number;
  isWorkingOut: boolean;
  createdAt: Date;
  members: Member[];
  todayWorkoutTime: number;
}

export interface WorkoutRecord {
  id: string;
  userId: string;
  workoutType: string;
  workoutTime: number;
  recorded_at: Date;
  startTime: Date;
  endTime: Date;
}

export interface MeetingMember {
  memberId: string;
  nickname: string;
  todayWorkoutTime: number;
  isWorkingOut: boolean;
}
