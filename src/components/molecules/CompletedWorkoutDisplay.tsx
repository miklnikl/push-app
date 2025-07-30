import { Box, Typography, Button } from '@mui/material';

type CompletedWorkoutDisplayProps = {
  totalSets: number;
  onStartNewWorkout: () => void;
};

export function CompletedWorkoutDisplay({ totalSets, onStartNewWorkout }: CompletedWorkoutDisplayProps) {
  return (
    <>
      <Typography variant='h4' gutterBottom textAlign='center' color='success.main'>
        🎉 Congratulations! 🎉
      </Typography>
      <Typography variant='h6' gutterBottom textAlign='center'>
        You've completed your workout!
      </Typography>
      <Box textAlign='center' mt={4}>
        <Typography variant='body1' mb={3}>
          Great job on completing {totalSets} sets of pushups. Keep it up!
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={onStartNewWorkout}
          sx={{ px: 4, py: 1, fontSize: '1.1rem' }}
        >
          Start New Workout
        </Button>
      </Box>
    </>
  );
}