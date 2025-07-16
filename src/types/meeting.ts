import type { UserProfile } from './user';

export interface Meeting {
  id: string;
  name: string;
  description?: string;
  workoutType: string;
  memberCount: number;
  maxMembers?: number;
  createdAt: Date;
  createdBy: string;
  memberIds: string[];
  isActive: boolean;
}

export interface MeetingDetail extends Omit<Meeting, 'memberIds'> {
  members: UserProfile[];
  todayGoalTime: number;
  isActive: boolean;
}

export interface WorkoutRecord {
  id: string;
  userId: string;
  meetingId: string;
  date: string;
  duration: number;
  startTime?: Date;
  endTime?: Date;
}
