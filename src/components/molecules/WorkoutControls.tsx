import { Box, Typography, Button } from '@mui/material';
import { PushupCounter } from '../atoms/PushupCounter';
import { WORKOUT_CONFIG, WORKOUT_MESSAGES } from '../../modules/workout/constants';

type WorkoutControlsProps = {
  currentPushupCount: number;
  targetPushupCount: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onCountChange: (value: number) => void;
  onCompleteSet: () => void;
  isSetCompleted: boolean;
  disabled?: boolean;
};

export function WorkoutControls({
  currentPushupCount,
  targetPushupCount,
  onIncrement,
  onDecrement,
  onCountChange,
  onCompleteSet,
  isSetCompleted,
  disabled = false,
}: WorkoutControlsProps) {
  const isCompleteDisabled = currentPushupCount !== targetPushupCount || isSetCompleted;

  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap={2} mt={2}>
      <PushupCounter
        currentCount={currentPushupCount}
        maxCount={targetPushupCount}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onChange={onCountChange}
        disabled={disabled}
      />
      
      <Typography variant='body1'>
        {WORKOUT_MESSAGES.WORKOUT.PROGRESS(currentPushupCount, targetPushupCount)}
      </Typography>
      
      <Button
        variant='contained'
        color='primary'
        onClick={onCompleteSet}
        disabled={isCompleteDisabled}
        sx={{ 
          mt: 2, 
          ...WORKOUT_CONFIG.BUTTON_STYLES.PRIMARY_BUTTON_PADDING, 
          fontSize: WORKOUT_CONFIG.BUTTON_STYLES.PRIMARY_BUTTON_FONT 
        }}
      >
        {isSetCompleted 
          ? WORKOUT_MESSAGES.BUTTONS.SET_COMPLETED 
          : WORKOUT_MESSAGES.BUTTONS.COMPLETE_SET
        }
      </Button>
    </Box>
  );
}