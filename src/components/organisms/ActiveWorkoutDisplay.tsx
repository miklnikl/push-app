import { Typography } from '@mui/material';
import { WorkoutProgressBar } from '../atoms/WorkoutProgressBar';
import { SetsOverview } from '../molecules/SetsOverview';
import { CurrentSetCard } from '../molecules/CurrentSetCard';
import { WORKOUT_MESSAGES } from '../../modules/workout/constants';
import { calculateWorkoutProgress } from '../../modules/workout/utils';
import type { Workout } from '../../modules/workout/types';

type ActiveWorkoutDisplayProps = {
  workout: Workout;
  currentSetIndex: number;
  currentPushupCount: number;
  isSetCompleted: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
  onCountChange: (value: number) => void;
  onCompleteSet: () => void;
};

export function ActiveWorkoutDisplay({
  workout,
  currentSetIndex,
  currentPushupCount,
  isSetCompleted,
  onIncrement,
  onDecrement,
  onCountChange,
  onCompleteSet,
}: ActiveWorkoutDisplayProps) {
  const currentSet = workout.pushupSequense[currentSetIndex];
  const totalSets = workout.pushupSequense.length;
  const workoutProgress = calculateWorkoutProgress(currentSetIndex, isSetCompleted, totalSets);

  return (
    <>
      <Typography variant='h4' gutterBottom textAlign='center'>
        {WORKOUT_MESSAGES.WORKOUT.TITLE}
      </Typography>
      
      <WorkoutProgressBar
        currentSet={currentSetIndex + 1}
        totalSets={totalSets}
        progressPercentage={workoutProgress}
      />

      <SetsOverview
        workout={workout}
        currentSetIndex={currentSetIndex}
      />

      <CurrentSetCard
        targetPushupCount={currentSet.pushupCount}
        currentPushupCount={currentPushupCount}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onCountChange={onCountChange}
        onCompleteSet={onCompleteSet}
        isSetCompleted={isSetCompleted}
        workoutNotes={workout.notes}
      />
    </>
  );
}