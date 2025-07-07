import { useState, useEffect, useCallback, useRef } from 'react';

interface TimerState {
  isRunning: boolean;
  elapsedTime: number;
  startTime: number | null;
  goalTime: number;
}

interface UseTimerOptions {
  goalTime?: number; // 목표 시간 (분)
  autoStart?: boolean;
  onComplete?: () => void;
}

const useTimer = (options: UseTimerOptions = {}) => {
  const { goalTime = 60, autoStart = false, onComplete } = options;

  const [timerState, setTimerState] = useState<TimerState>({
    isRunning: false,
    elapsedTime: 0,
    startTime: null,
    goalTime: goalTime * 60, // 분을 초로 변환
  });

  const intervalRef = useRef<number | null>(null);

  // 타이머 시작
  const startTimer = useCallback(() => {
    const now = Date.now();
    setTimerState(prev => ({
      ...prev,
      isRunning: true,
      startTime: now,
    }));
  }, []);

  // 타이머 정지
  const pauseTimer = useCallback(() => {
    setTimerState(prev => ({
      ...prev,
      isRunning: false,
      startTime: null,
    }));
  }, []);

  // 타이머 리셋
  const resetTimer = useCallback(() => {
    setTimerState(prev => ({
      ...prev,
      isRunning: false,
      elapsedTime: 0,
      startTime: null,
    }));
  }, []);

  // 목표 시간 설정
  const setGoalTime = useCallback((minutes: number) => {
    setTimerState(prev => ({
      ...prev,
      goalTime: minutes * 60,
    }));
  }, []);

  // 경과 시간 업데이트
  useEffect(() => {
    if (timerState.isRunning && timerState.startTime) {
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - timerState.startTime!) / 1000);

        setTimerState(prev => ({
          ...prev,
          elapsedTime: elapsed,
        }));

        // 목표 시간 달성 시 콜백 실행
        if (elapsed >= timerState.goalTime && onComplete) {
          onComplete();
        }
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    timerState.isRunning,
    timerState.startTime,
    timerState.goalTime,
    onComplete,
  ]);

  // 자동 시작 옵션
  useEffect(() => {
    if (autoStart) {
      startTimer();
    }
  }, [autoStart, startTimer]);

  // 포맷된 시간 문자열
  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  // 진행률 계산 (0-100)
  const progress = useCallback(() => {
    if (timerState.goalTime === 0) return 0;
    return Math.min((timerState.elapsedTime / timerState.goalTime) * 100, 100);
  }, [timerState.elapsedTime, timerState.goalTime]);

  // 목표 달성 여부
  const isGoalAchieved = timerState.elapsedTime >= timerState.goalTime;

  return {
    // 상태
    isRunning: timerState.isRunning,
    elapsedTime: timerState.elapsedTime,
    goalTime: timerState.goalTime,
    progress: progress(),
    isGoalAchieved,

    // 포맷된 시간
    formattedElapsedTime: formatTime(timerState.elapsedTime),
    formattedGoalTime: formatTime(timerState.goalTime),

    // 액션
    startTimer,
    pauseTimer,
    resetTimer,
    setGoalTime,

    // 유틸리티
    formatTime,
  };
};

export default useTimer;
