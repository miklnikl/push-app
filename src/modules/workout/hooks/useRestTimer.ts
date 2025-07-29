import { useEffect, useState } from 'react';

type UseRestTimerProps = {
  isResting: boolean;
  restTimeRemaining: number;
  onTimerUpdate: (timeRemaining: number) => void;
  onTimerComplete: () => void;
};

export function useRestTimer({
  isResting,
  restTimeRemaining,
  onTimerUpdate,
  onTimerComplete,
}: UseRestTimerProps) {
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  useEffect(() => {
    if (isResting && restTimeRemaining > 0) {
      const interval = setInterval(() => {
        onTimerUpdate(restTimeRemaining - 1);
      }, 1000);
      setTimerInterval(interval);
      return () => clearInterval(interval);
    } else if (isResting && restTimeRemaining === 0) {
      onTimerComplete();
    }
  }, [isResting, restTimeRemaining, onTimerUpdate, onTimerComplete]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);
}