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
  date: string; // YYYY-MM-DD 형식
  memberId: string;
  workoutTime: number;
}

export interface MeetingMember {
  memberId: string;
  nickname: string;
  todayWorkoutTime: number;
  isWorkingOut: boolean;
}

export interface CalendarData {
  year: number;
  month: number;
  workoutRecords: WorkoutRecord[];
  members: MeetingMember[];
}

export interface CalendarDayData {
  date: number;
  workoutColors: string[];
}

export interface MemberColor {
  color: string;
  nickname: string;
}
