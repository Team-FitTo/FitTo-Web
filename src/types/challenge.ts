export interface Challenge {
  id: string;
  meetingId: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  reward: string;
  status: 'pending' | 'active' | 'completed';
  participants: ChallengeParticipant[];
  createdAt: Date;
}

export interface ChallengeParticipant {
  userId: string;
  userName: string;
  profileImage?: string;
  status: 'accepted' | 'declined' | 'pending';
  totalWorkoutTime: number;
  rank?: number;
}
