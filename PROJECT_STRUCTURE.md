# FitTo 프로젝트 구조

## 📁 디렉토리 구조

```
fitto-web/
├── src/
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   │   ├── ui/             # 기본 UI 컴포넌트
│   │   │   ├── Button.tsx  # 버튼 컴포넌트
│   │   │   ├── Input.tsx   # 입력 컴포넌트
│   │   │   └── Card.tsx    # 카드 컴포넌트
│   │   ├── layout/         # 레이아웃 컴포넌트 (예정)
│   │   └── forms/          # 폼 컴포넌트 (예정)
│   │
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── auth/           # 인증 관련 페이지
│   │   │   └── LoginPage.tsx
│   │   ├── home/           # 홈 화면
│   │   │   └── HomePage.tsx
│   │   └── meeting/        # 모임 관련 페이지 (예정)
│   │
│   ├── hooks/              # 커스텀 React Hooks (예정)
│   │   ├── useAuth.ts
│   │   ├── useMeeting.ts
│   │   └── useTimer.ts
│   │
│   ├── types/              # TypeScript 타입 정의
│   │   ├── auth.ts         # 인증 관련 타입
│   │   ├── user.ts         # 사용자 관련 타입
│   │   ├── meeting.ts      # 모임 관련 타입
│   │   └── challenge.ts    # 챌린지 관련 타입
│   │
│   ├── utils/              # 유틸리티 함수 (예정)
│   ├── services/           # API 서비스 (예정)
│   ├── store/              # 상태 관리 (예정)
│   │
│   ├── App.tsx             # 메인 앱 컴포넌트
│   ├── main.tsx            # 앱 진입점
│   ├── index.css           # 전역 스타일
│   └── vite-env.d.ts       # Vite 타입 정의
│
├── public/                 # 정적 파일
├── tailwind.config.js      # Tailwind CSS 설정
├── postcss.config.js       # PostCSS 설정
├── package.json            # 프로젝트 의존성
└── vite.config.ts          # Vite 설정
```

## 🎯 각 파일 역할

### 📦 컴포넌트 (components/)

#### UI 컴포넌트 (ui/)
- **Button.tsx**: 재사용 가능한 버튼 컴포넌트
  - variant: primary, secondary, outline, ghost
  - size: sm, md, lg
  - onClick, disabled 등 props 지원

- **Input.tsx**: 재사용 가능한 입력 컴포넌트
  - type: text, email, password, number
  - label, error, disabled 등 props 지원

- **Card.tsx**: 재사용 가능한 카드 컴포넌트
  - onClick 이벤트 지원
  - hover 효과 포함

### 📄 페이지 (pages/)

#### 인증 페이지 (auth/)
- **LoginPage.tsx**: 로그인 화면
  - 이메일/비밀번호 로그인
  - 카카오 로그인 버튼
  - 회원가입/비밀번호 찾기 링크

#### 홈 페이지 (home/)
- **HomePage.tsx**: 모임 리스트 화면
  - 내가 가입한 모임 목록
  - 모임 생성 버튼
  - 모임 카드 형태로 표시

### 🔧 타입 정의 (types/)

- **auth.ts**: 인증 관련 타입 (LoginCredentials, AuthUser, AuthState)
- **user.ts**: 사용자 관련 타입 (User, UserProfile)
- **meeting.ts**: 모임 관련 타입 (Meeting, MeetingDetail, WorkoutRecord)
- **challenge.ts**: 챌린지 관련 타입 (Challenge, ChallengeParticipant)

### ⚙️ 설정 파일

- **tailwind.config.js**: Tailwind CSS 설정
  - content: 스캔할 파일 경로
  - theme: 커스텀 테마 설정
  - plugins: 추가 플러그인

- **postcss.config.js**: PostCSS 설정
  - tailwindcss, autoprefixer 플러그인

## 🚀 다음 단계

### 1. 모임 관련 페이지 추가
- 모임 상세 화면
- 구성원 상태 확인
- 달력 (공유 달력)
- 챌린지 설정/진행

### 2. 상태 관리 추가
- React Context 또는 Redux Toolkit
- 인증 상태 관리
- 모임 데이터 관리

### 3. API 연동
- 백엔드 API 연동
- 인증 토큰 관리
- 데이터 페칭 로직

### 4. 추가 기능
- 실시간 타이머
- 푸시 알림
- 이미지 업로드
- 소셜 로그인 (카카오)

## 💡 개발 팁

1. **Tailwind CSS 사용법**:
   ```jsx
   // 기본 클래스
   <div className="bg-blue-500 text-white p-4 rounded-lg">
   
   // 반응형 디자인
   <div className="w-full md:w-1/2 lg:w-1/3">
   
   // 상태별 스타일
   <button className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50">
   ```

2. **TypeScript 타입 활용**:
   ```tsx
   // Props 타입 정의
   interface ButtonProps {
     variant?: 'primary' | 'secondary';
     children: React.ReactNode;
   }
   
   // 컴포넌트에서 사용
   const Button: React.FC<ButtonProps> = ({ variant, children }) => {
     // ...
   };
   ```

3. **라우팅 구조**:
   ```tsx
   // 중첩 라우팅 예시
   <Route path="/meeting/:id" element={<MeetingLayout />}>
     <Route index element={<MeetingOverview />} />
     <Route path="members" element={<MembersList />} />
     <Route path="calendar" element={<Calendar />} />
     <Route path="challenge" element={<Challenge />} />
   </Route>
   