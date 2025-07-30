import { Box, CircularProgress, Typography } from '@mui/material';

type SimpleRestTimerProps = {
  remainingTime: number;
  totalDuration: number;
};

export function SimpleRestTimer({ remainingTime, totalDuration }: SimpleRestTimerProps) {
  const progress = (remainingTime / totalDuration) * 100;

  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress
        variant='determinate'
        value={progress}
        size={200}
        thickness={4}
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
          {remainingTime}
        </Typography>
      </Box>
    </Box>
  );
}