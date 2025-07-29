import { useStore } from '@tanstack/react-store';
import { workoutStore, workoutActions } from '../modules/workout/workoutStore';
import { useRestTimer } from '../modules/workout/hooks/useRestTimer';
import { validatePushupCount } from '../modules/workout/utils';
import { ActiveWorkoutDisplay } from '../components/organisms/ActiveWorkoutDisplay';
import { RestingDisplay } from '../components/organisms/RestingDisplay';
import { CompletedWorkoutDisplay } from '../components/organisms/CompletedWorkoutDisplay';

export function WorkoutPage() {
  const workoutState = useStore(workoutStore);

  const {
    currentWorkout,
    currentSetIndex,
    currentPushupCount,
    isSetCompleted,
    isRestingBetweenSets,
    restTimeRemaining,
    isWorkoutCompleted,
  } = workoutState;

  // Handle rest timer with custom hook
  useRestTimer({
    isResting: isRestingBetweenSets,
    restTimeRemaining,
    onTimerUpdate: workoutActions.updateRestTimer,
    onTimerComplete: workoutActions.startNextSet,
  });

  const handlePushupCountChange = (value: number) => {
    const currentSet = currentWorkout.pushupSequense[currentSetIndex];
    const validatedValue = validatePushupCount(value.toString(), currentSet.pushupCount);
    if (validatedValue !== null) {
      workoutActions.setPushupCount(validatedValue);
    }
  };

  const handleCompleteSet = () => {
    const currentSet = currentWorkout.pushupSequense[currentSetIndex];
    if (currentPushupCount === currentSet.pushupCount) {
      workoutActions.completeSet();
    }
  };

  // Show congratulations when workout is completed
  if (isWorkoutCompleted) {
    return (
      <CompletedWorkoutDisplay
        workout={currentWorkout}
        onStartNewWorkout={workoutActions.resetWorkout}
      />
    );
  }

  // Show rest timer between sets
  if (isRestingBetweenSets) {
    const nextSetIndex = currentSetIndex + 1;
    const nextSet = currentWorkout.pushupSequense[nextSetIndex];
    
    return (
      <RestingDisplay
        remainingTime={restTimeRemaining}
        totalRestDuration={currentWorkout.restDuration}
        nextSetNumber={nextSetIndex + 1}
        nextSetPushupCount={nextSet.pushupCount}
        onSkipRest={workoutActions.startNextSet}
      />
    );
  }

  // Show active workout
  return (
    <ActiveWorkoutDisplay
      workout={currentWorkout}
      currentSetIndex={currentSetIndex}
      currentPushupCount={currentPushupCount}
      isSetCompleted={isSetCompleted}
      onIncrement={workoutActions.incrementPushups}
      onDecrement={workoutActions.decrementPushups}
      onCountChange={handlePushupCountChange}
      onCompleteSet={handleCompleteSet}
    />
  );
}