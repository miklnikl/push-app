import { Button, TextField, Box } from '@mui/material';
import { WORKOUT_CONFIG } from '../../modules/workout/constants';

type PushupCounterProps = {
  currentCount: number;
  maxCount: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (value: number) => void;
  disabled?: boolean;
};

export function PushupCounter({
  currentCount,
  maxCount,
  onIncrement,
  onDecrement,
  onChange,
  disabled = false,
}: PushupCounterProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      onChange(value);
    }
  };

  return (
    <Box display='flex' alignItems='center' gap={2}>
      <Button
        variant='contained'
        color='error'
        onClick={onDecrement}
        sx={{ 
          minWidth: WORKOUT_CONFIG.BUTTON_STYLES.COUNTER_BUTTON_SIZE, 
          minHeight: WORKOUT_CONFIG.BUTTON_STYLES.COUNTER_BUTTON_SIZE, 
          fontSize: WORKOUT_CONFIG.BUTTON_STYLES.COUNTER_FONT_SIZE, 
          borderRadius: '50%' 
        }}
        disabled={disabled}
      >
        -
      </Button>
      <TextField
        type='number'
        value={currentCount}
        onChange={handleInputChange}
        inputProps={{ 
          min: 0, 
          max: maxCount,
          style: { textAlign: 'center', fontSize: '2rem' } 
        }}
        sx={{ width: 100 }}
        disabled={disabled}
      />
      <Button
        variant='contained'
        color='success'
        onClick={onIncrement}
        sx={{ 
          minWidth: WORKOUT_CONFIG.BUTTON_STYLES.COUNTER_BUTTON_SIZE, 
          minHeight: WORKOUT_CONFIG.BUTTON_STYLES.COUNTER_BUTTON_SIZE, 
          fontSize: WORKOUT_CONFIG.BUTTON_STYLES.COUNTER_FONT_SIZE, 
          borderRadius: '50%' 
        }}
        disabled={disabled}
      >
        +
      </Button>
    </Box>
  );
}