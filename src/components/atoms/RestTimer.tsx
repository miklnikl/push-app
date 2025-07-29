import { Box, CircularProgress, Typography } from '@mui/material';
import { WORKOUT_CONFIG } from '../../modules/workout/constants';
import { calculateRestProgress, formatRestTime } from '../../modules/workout/utils';

type RestTimerProps = {
  remainingTime: number;
  totalDuration: number;
};

export function RestTimer({ remainingTime, totalDuration }: RestTimerProps) {
  const progress = calculateRestProgress(remainingTime, totalDuration);

  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress
        variant='determinate'
        value={progress}
        size={WORKOUT_CONFIG.PROGRESS.CIRCULAR_TIMER_SIZE}
        thickness={WORKOUT_CONFIG.PROGRESS.CIRCULAR_TIMER_THICKNESS}
      />
      <Box
        position='absolute'
        top={0}
        left={0}
        bottom={0}
        right={0}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='h2' component='div' color='text.secondary'>
          {formatRestTime(remainingTime)}
        </Typography>
      </Box>
    </Box>
  );
}