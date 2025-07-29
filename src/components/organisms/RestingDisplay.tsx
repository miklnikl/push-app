import { Typography, Box, Button } from '@mui/material';
import { RestTimer } from '../atoms/RestTimer';
import { WORKOUT_MESSAGES } from '../../modules/workout/constants';

type RestingDisplayProps = {
  remainingTime: number;
  totalRestDuration: number;
  nextSetNumber: number;
  nextSetPushupCount: number;
  onSkipRest: () => void;
};

export function RestingDisplay({
  remainingTime,
  totalRestDuration,
  nextSetNumber,
  nextSetPushupCount,
  onSkipRest,
}: RestingDisplayProps) {
  return (
    <>
      <Typography variant='h4' gutterBottom textAlign='center'>
        {WORKOUT_MESSAGES.REST.TITLE}
      </Typography>
      <Box display='flex' flexDirection='column' alignItems='center' gap={3} mt={4}>
        <RestTimer remainingTime={remainingTime} totalDuration={totalRestDuration} />
        <Typography variant='h6' textAlign='center'>
          {WORKOUT_MESSAGES.REST.GET_READY(nextSetNumber)}
        </Typography>
        <Typography variant='body1' textAlign='center'>
          {WORKOUT_MESSAGES.REST.NEXT_SET(nextSetPushupCount)}
        </Typography>
        <Button
          variant='outlined'
          onClick={onSkipRest}
          sx={{ mt: 2 }}
        >
          {WORKOUT_MESSAGES.BUTTONS.SKIP_REST}
        </Button>
      </Box>
    </>
  );
}