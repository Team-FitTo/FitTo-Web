# Layout 컴포넌트

레이아웃 관련 컴포넌트들을 저장하는 폴더입니다.

## 구조

- `Header.tsx` - 상단 헤더 컴포넌트
- `BottomNavigation.tsx` - 하단 네비게이션 컴포넌트
- `PageLayout.tsx` - 페이지 전체 레이아웃 컴포넌트

## 사용 예시

### Header

```tsx
<Header
  title="내 운동 모임"
  showBack={true}
  rightAction={<Button>설정</Button>}
/>
```

### BottomNavigation

```tsx
<BottomNavigation />
```

### PageLayout

```tsx
<PageLayout title="홈" showBack={false} showBottomNav={true}>
  <div>페이지 콘텐츠</div>
</PageLayout>
```
