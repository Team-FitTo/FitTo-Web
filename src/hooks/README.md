# Hooks 디렉토리

커스텀 React Hooks를 저장하는 폴더입니다.

## 구조

- `useAuth.ts` - 인증 관련 로직 (로그인, 로그아웃, 사용자 정보 관리)
- `useMeeting.ts` - 모임 관련 로직 (모임 목록, 상세 정보, 생성, 참여)
- `useTimer.ts` - 타이머 관련 로직 (운동 타이머, 목표 시간 설정)
- `useLocalStorage.ts` - 로컬 스토리지 관리 유틸리티

## 사용 예시

### useAuth

```tsx
const { user, isAuthenticated, login, logout } = useAuth();

// 로그인
const handleLogin = async () => {
  const result = await login({
    email: 'test@example.com',
    password: 'password',
  });
  if (result.success) {
    // 로그인 성공
  }
};
```

### useMeeting

```tsx
const { meetings, currentMeeting, createMeeting, fetchMeetingDetail } =
  useMeeting();

// 모임 생성
const handleCreateMeeting = async () => {
  const result = await createMeeting({
    name: '새 모임',
    description: '모임 설명',
    workoutType: '조깅',
    memberCount: 1,
    maxMembers: 10,
    memberIds: ['user1'],
  });
};
```

### useTimer

```tsx
const {
  isRunning,
  elapsedTime,
  formattedElapsedTime,
  startTimer,
  pauseTimer,
  resetTimer,
  setGoalTime,
  progress,
} = useTimer({ goalTime: 30 }); // 30분 목표

// 타이머 시작/정지
const handleToggleTimer = () => {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
};
```

### useLocalStorage

```tsx
const [userSettings, setUserSettings, removeUserSettings] = useLocalStorage(
  'userSettings',
  {
    theme: 'light',
    notifications: true,
  }
);

// 설정 업데이트
setUserSettings(prev => ({ ...prev, theme: 'dark' }));
```
