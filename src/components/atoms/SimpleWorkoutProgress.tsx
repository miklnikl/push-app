import { Box, LinearProgress, Typography } from '@mui/material';

type SimpleWorkoutProgressProps = {
  currentSetIndex: number;
  totalSets: number;
  isSetCompleted: boolean;
};

export function SimpleWorkoutProgress({ currentSetIndex, totalSets, isSetCompleted }: SimpleWorkoutProgressProps) {
  const workoutProgress = ((currentSetIndex + (isSetCompleted ? 1 : 0)) / totalSets) * 100;

  return (
    <Box mb={3}>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={1}>
        <Typography variant='body2'>
          Set {currentSetIndex + 1} of {totalSets}
        </Typography>
        <Typography variant='body2'>
          {Math.round(workoutProgress)}% Complete
        </Typography>
      </Box>
      <LinearProgress variant='determinate' value={workoutProgress} sx={{ height: 8, borderRadius: 4 }} />
    </Box>
  );
}