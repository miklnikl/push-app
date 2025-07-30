import { useStore } from '@tanstack/react-store';
import { useEffect, useState } from 'react';
import { workoutStore, workoutActions } from '../modules/workout/workoutStore';
import { SimpleActiveWorkout } from '../components/organisms/SimpleActiveWorkout';
import { RestDisplay } from '../components/molecules/RestDisplay';
import { CompletedWorkoutDisplay } from '../components/molecules/CompletedWorkoutDisplay';

export function WorkoutPage() {
  const workoutState = useStore(workoutStore);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  const {
    currentWorkout,
    currentSetIndex,
    isSetCompleted,
    isRestingBetweenSets,
    restTimeRemaining,
    isWorkoutCompleted,
    workoutStartTime,
  } = workoutState;

  // Start workout timer on component mount if not already started
  useEffect(() => {
    if (!workoutStartTime && !isWorkoutCompleted) {
      workoutActions.startWorkout();
    }
  }, [workoutStartTime, isWorkoutCompleted]);

  // Handle rest timer
  useEffect(() => {
    if (isRestingBetweenSets && restTimeRemaining > 0) {
      const interval = setInterval(() => {
        workoutActions.updateRestTimer(restTimeRemaining - 1);
      }, 1000);
      setTimerInterval(interval);
      return () => clearInterval(interval);
    } else if (isRestingBetweenSets && restTimeRemaining === 0) {
      workoutActions.startNextSet();
    }
  }, [isRestingBetweenSets, restTimeRemaining]);

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const handleCompleteSet = () => {
    workoutActions.completeSet();
  };

  // Calculate derived values
  const totalSets = currentWorkout.pushupSequense.length;

  // Show congratulations when workout is completed
  if (isWorkoutCompleted) {
    return (
      <CompletedWorkoutDisplay
        totalSets={totalSets}
        onStartNewWorkout={workoutActions.resetWorkout}
      />
    );
  }

  // Show rest timer between sets
  if (isRestingBetweenSets) {
    const nextSetIndex = currentSetIndex + 1;
    const nextSet = currentWorkout.pushupSequense[nextSetIndex];
    
    return (
      <RestDisplay
        remainingTime={restTimeRemaining}
        totalDuration={currentWorkout.restDuration}
        nextSetNumber={nextSetIndex + 1}
        nextSetPushupCount={nextSet.pushupCount}
        onSkipRest={workoutActions.startNextSet}
      />
    );
  }

  return (
    <SimpleActiveWorkout
      workout={currentWorkout}
      currentSetIndex={currentSetIndex}
      isSetCompleted={isSetCompleted}
      onCompleteSet={handleCompleteSet}
    />
  );
}