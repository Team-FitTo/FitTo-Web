import type { Meeting } from './meeting';

export interface User {
  id: string;
  myMeeting: Meeting[];
}

export interface Member {
  id: string;
  nickname: string;
  totalWorkoutTime?: number;
  todayWorkoutTime?: number;
  isWorkingOut: boolean;
}
