import { Box, LinearProgress, Typography } from '@mui/material';
import { WORKOUT_CONFIG, WORKOUT_MESSAGES } from '../../modules/workout/constants';

type WorkoutProgressBarProps = {
  currentSet: number;
  totalSets: number;
  progressPercentage: number;
};

export function WorkoutProgressBar({ 
  currentSet, 
  totalSets, 
  progressPercentage 
}: WorkoutProgressBarProps) {
  return (
    <Box mb={3}>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={1}>
        <Typography variant='body2'>
          {WORKOUT_MESSAGES.WORKOUT.SET_INDICATOR(currentSet, totalSets)}
        </Typography>
        <Typography variant='body2'>
          {WORKOUT_MESSAGES.WORKOUT.COMPLETE_PERCENTAGE(Math.round(progressPercentage))}
        </Typography>
      </Box>
      <LinearProgress 
        variant='determinate' 
        value={progressPercentage} 
        sx={{ 
          height: WORKOUT_CONFIG.PROGRESS.BAR_HEIGHT, 
          borderRadius: WORKOUT_CONFIG.PROGRESS.BAR_BORDER_RADIUS 
        }} 
      />
    </Box>
  );
}