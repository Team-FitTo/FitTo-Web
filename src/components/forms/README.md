# Forms 컴포넌트

폼 관련 컴포넌트들을 저장하는 폴더입니다.

## 구조

- `LoginForm.tsx` - 로그인 폼 컴포넌트
- `CreateMeetingForm.tsx` - 모임 생성 폼 컴포넌트
- `CreateChallengeForm.tsx` - 챌린지 생성 폼 컴포넌트

## 사용 예시

### LoginForm

```tsx
<LoginForm onSuccess={() => navigate('/')} onError={error => alert(error)} />
```

### CreateMeetingForm

```tsx
<CreateMeetingForm
  onSuccess={() => {
    // 모임 생성 성공 처리
    navigate('/');
  }}
  onCancel={() => navigate('/')}
/>
```

### CreateChallengeForm

```tsx
<CreateChallengeForm
  meetingId="meeting-123"
  onSuccess={() => {
    // 챌린지 생성 성공 처리
    navigate('/meeting/meeting-123');
  }}
  onCancel={() => navigate('/meeting/meeting-123')}
/>
```

## 공통 기능

### 폼 검증

- 실시간 입력 검증
- 에러 메시지 표시
- 제출 전 최종 검증

### 로딩 상태

- 제출 중 로딩 표시
- 버튼 비활성화
- 중복 제출 방지

### 접근성

- 키보드 네비게이션 지원
- 스크린 리더 호환
- 포커스 관리
