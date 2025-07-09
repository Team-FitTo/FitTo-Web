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

//타입을 아래처럼 정의 할 수 도 있더라고, 나중에 다른 사람이 볼 때 편할 것 같다고 생각하긴 했어 덜 깔끔하지만
// export interface UserProfile {
//   id: 'dafl-123df' | string;
//   name: '박성현' | string;
//   profileImage?: 'https://example.com/profile.jpg' | string;
//   totalWorkoutTime: 12 | number;
//   todayWorkoutTime: 0 | number;
//   isWorkingOut: false | boolean;
// }
