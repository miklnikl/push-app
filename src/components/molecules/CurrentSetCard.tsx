import { Card, CardContent, Typography, Box } from '@mui/material';
import { WorkoutControls } from './WorkoutControls';
import { WORKOUT_MESSAGES } from '../../modules/workout/constants';

type CurrentSetCardProps = {
  targetPushupCount: number;
  currentPushupCount: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onCountChange: (value: number) => void;
  onCompleteSet: () => void;
  isSetCompleted: boolean;
  workoutNotes?: string;
};

export function CurrentSetCard({
  targetPushupCount,
  currentPushupCount,
  onIncrement,
  onDecrement,
  onCountChange,
  onCompleteSet,
  isSetCompleted,
  workoutNotes,
}: CurrentSetCardProps) {
  return (
    <>
      <Card sx={{ mb: 3, backgroundColor: theme => theme.palette.primary.light + '20' }}>
        <CardContent>
          <Typography variant='h6' gutterBottom textAlign='center'>
            {WORKOUT_MESSAGES.WORKOUT.CURRENT_SET(targetPushupCount)}
          </Typography>
          
          <WorkoutControls
            currentPushupCount={currentPushupCount}
            targetPushupCount={targetPushupCount}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onCountChange={onCountChange}
            onCompleteSet={onCompleteSet}
            isSetCompleted={isSetCompleted}
          />
        </CardContent>
      </Card>

      {workoutNotes && (
        <Box textAlign='center'>
          <Typography variant='body2' color='text.secondary'>
            {workoutNotes}
          </Typography>
        </Box>
      )}
    </>
  );
}