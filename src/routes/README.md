# Routes 디렉토리

라우팅 설정을 관리하는 폴더입니다.

## 구조

- `index.tsx` - 메인 라우터 설정

## 라우트 구조

### 인증 관련

- `/login` - 로그인 페이지
  - 인증된 사용자는 홈으로 리다이렉트
  - 비인증 사용자만 접근 가능

### 메인 페이지

- `/` - 홈 페이지 (내 운동 모임)
  - 인증된 사용자만 접근 가능
  - PageLayout 적용 (헤더 + 하단 네비게이션)

### 모임 관련

- `/meetings` - 모임 목록 페이지
- `/meeting/:id` - 모임 상세 페이지
- `/create-meeting` - 모임 생성 페이지
  - 하단 네비게이션 숨김 (showBottomNav={false})

### 챌린지 관련

- `/challenges` - 챌린지 목록 페이지

### 사용자 관련

- `/profile` - 프로필 페이지

## 보호된 라우트

모든 인증이 필요한 페이지는 다음과 같이 보호됩니다:

```tsx
<Route
  path="/protected"
  element={
    isAuthenticated ? (
      <PageLayout title="페이지 제목" showBack={true}>
        <PageContent />
      </PageLayout>
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>
```

## PageLayout 옵션

- `title`: 페이지 제목
- `showBack`: 뒤로가기 버튼 표시 여부
- `showBottomNav`: 하단 네비게이션 표시 여부
- `rightAction`: 헤더 우측 액션 버튼

## 네비게이션 흐름

1. **비인증 사용자**: `/login` → 로그인 성공 → `/`
2. **인증된 사용자**: 모든 페이지 접근 가능
3. **잘못된 경로**: `*` → `/` 리다이렉트
