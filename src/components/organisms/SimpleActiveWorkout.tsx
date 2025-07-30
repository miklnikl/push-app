import { Typography } from '@mui/material';
import { SimpleWorkoutProgress } from '../atoms/SimpleWorkoutProgress';
import { SetsOverview } from '../molecules/SetsOverview';
import { CurrentSetCard } from '../molecules/CurrentSetCard';
import type { Workout } from '../../modules/workout/types';

type SimpleActiveWorkoutProps = {
  workout: Workout;
  currentSetIndex: number;
  isSetCompleted: boolean;
  onCompleteSet: () => void;
};

export function SimpleActiveWorkout({ 
  workout, 
  currentSetIndex, 
  isSetCompleted, 
  onCompleteSet 
}: SimpleActiveWorkoutProps) {
  const totalSets = workout.pushupSequense.length;
  const currentSet = workout.pushupSequense[currentSetIndex];

  return (
    <>
      <Typography variant='h4' gutterBottom textAlign='center'>
        Pushup Workout
      </Typography>

      <SimpleWorkoutProgress 
        currentSetIndex={currentSetIndex}
        totalSets={totalSets}
        isSetCompleted={isSetCompleted}
      />

      <SetsOverview 
        workout={workout}
        currentSetIndex={currentSetIndex}
      />

      <CurrentSetCard
        pushupCount={currentSet.pushupCount}
        isSetCompleted={isSetCompleted}
        onCompleteSet={onCompleteSet}
        workoutNotes={workout.notes}
      />
    </>
  );
}