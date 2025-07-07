export interface User {
  id: string;
  name: string;
  email?: string;
  profileImage?: string;
  createdAt: Date;
}

export interface UserProfile {
  id: string;
  name: string;
  profileImage?: string;
  totalWorkoutTime: number;
  todayWorkoutTime: number;
  isWorkingOut: boolean;
}
