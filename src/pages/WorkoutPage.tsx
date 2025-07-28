import { useState } from 'react';
import { Typography, Box, Button, TextField, Alert } from '@mui/material';

export function WorkoutPage() {
  const [pushupCount, setPushupCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const incrementPushups = () => setPushupCount(prev => prev + 1);
  const decrementPushups = () => setPushupCount(prev => Math.max(0, prev - 1));
  const handlePushupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) setPushupCount(value);
  };

  const submitWorkout = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setPushupCount(0);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <>
        <Alert severity='success' sx={{ mb: 2 }}>
          <Typography variant='h5'>Workout Completed! 🎉</Typography>
          <Typography>Great job! You completed {pushupCount} pushups.</Typography>
          <Typography variant='body2'>Starting a new workout in a few seconds...</Typography>
        </Alert>
      </>
    );
  }

  return (
    <>
      <Typography variant='h4' gutterBottom>
        Workout Page
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        Track your pushup workout!
      </Typography>
      <Box display='flex' flexDirection='column' alignItems='center' gap={2} mt={2}>
        <Typography variant='h6'>Pushup Counter</Typography>
        <Box display='flex' alignItems='center' gap={2}>
          <Button
            variant='contained'
            color='error'
            onClick={decrementPushups}
            sx={{ minWidth: 50, minHeight: 50, fontSize: '1.5rem', borderRadius: '50%' }}
          >
            -
          </Button>
          <TextField
            type='number'
            value={pushupCount}
            onChange={handlePushupInputChange}
            inputProps={{ min: 0, style: { textAlign: 'center', fontSize: '2rem' } }}
            sx={{ width: 100 }}
          />
          <Button
            variant='contained'
            color='success'
            onClick={incrementPushups}
            sx={{ minWidth: 50, minHeight: 50, fontSize: '1.5rem', borderRadius: '50%' }}
          >
            +
          </Button>
        </Box>
        <Typography variant='body1'>
          Current Count: <strong>{pushupCount}</strong>
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={submitWorkout}
          disabled={pushupCount === 0}
          sx={{ mt: 2, px: 4, py: 1, fontSize: '1.1rem' }}
        >
          Submit Workout
        </Button>
      </Box>
    </>
  );
}