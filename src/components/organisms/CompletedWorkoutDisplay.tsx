import { Alert, Typography, Box, Button } from '@mui/material';
import { WORKOUT_CONFIG, WORKOUT_MESSAGES } from '../../modules/workout/constants';
import { calculateTotalPushups } from '../../modules/workout/utils';
import type { Workout } from '../../modules/workout/types';

type CompletedWorkoutDisplayProps = {
  workout: Workout;
  onStartNewWorkout: () => void;
};

export function CompletedWorkoutDisplay({
  workout,
  onStartNewWorkout,
}: CompletedWorkoutDisplayProps) {
  const totalSets = workout.pushupSequense.length;
  const totalPushups = calculateTotalPushups(workout);

  return (
    <>
      <Alert severity='success' sx={{ mb: 2 }}>
        <Typography variant='h5'>
          {WORKOUT_MESSAGES.CONGRATULATIONS.TITLE}
        </Typography>
        <Typography variant='h6' sx={{ mt: 1 }}>
          {WORKOUT_MESSAGES.CONGRATULATIONS.SUBTITLE}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          {WORKOUT_MESSAGES.CONGRATULATIONS.DESCRIPTION(totalSets, totalPushups)}
        </Typography>
        <Typography variant='body2' sx={{ mt: 1 }}>
          {WORKOUT_MESSAGES.CONGRATULATIONS.ENCOURAGEMENT}
        </Typography>
      </Alert>
      <Box display='flex' justifyContent='center' mt={2}>
        <Button
          variant='contained'
          color='primary'
          onClick={onStartNewWorkout}
          sx={{ 
            ...WORKOUT_CONFIG.BUTTON_STYLES.PRIMARY_BUTTON_PADDING, 
            fontSize: WORKOUT_CONFIG.BUTTON_STYLES.PRIMARY_BUTTON_FONT 
          }}
        >
          {WORKOUT_MESSAGES.BUTTONS.START_NEW_WORKOUT}
        </Button>
      </Box>
    </>
  );
}