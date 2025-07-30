import { Box, Typography, Button } from '@mui/material';
import { SimpleRestTimer } from '../atoms/SimpleRestTimer';

type RestDisplayProps = {
  remainingTime: number;
  totalDuration: number;
  nextSetNumber: number;
  nextSetPushupCount: number;
  onSkipRest: () => void;
};

export function RestDisplay({ 
  remainingTime, 
  totalDuration, 
  nextSetNumber, 
  nextSetPushupCount, 
  onSkipRest 
}: RestDisplayProps) {
  return (
    <>
      <Typography variant='h4' gutterBottom textAlign='center'>
        Rest Time
      </Typography>
      <Box display='flex' flexDirection='column' alignItems='center' gap={3} mt={4}>
        <SimpleRestTimer remainingTime={remainingTime} totalDuration={totalDuration} />
        <Typography variant='h6' textAlign='center'>
          Get ready for Set {nextSetNumber}
        </Typography>
        <Typography variant='body1' textAlign='center'>
          Next set: {nextSetPushupCount} pushups
        </Typography>
        <Button
          variant='outlined'
          onClick={onSkipRest}
          sx={{ mt: 2 }}
        >
          Skip Rest
        </Button>
      </Box>
    </>
  );
}