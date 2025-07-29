import { Box, Typography } from '@mui/material';
import { SetChip } from '../atoms/SetChip';
import { WORKOUT_MESSAGES } from '../../modules/workout/constants';
import type { Workout } from '../../modules/workout/types';

type SetsOverviewProps = {
  workout: Workout;
  currentSetIndex: number;
};

export function SetsOverview({ workout, currentSetIndex }: SetsOverviewProps) {
  return (
    <Box mb={3}>
      <Typography variant='h6' gutterBottom>
        {WORKOUT_MESSAGES.WORKOUT.SETS_OVERVIEW}
      </Typography>
      <Box display='flex' gap={1} flexWrap='wrap'>
        {workout.pushupSequense.map((set, index) => (
          <SetChip
            key={index}
            pushupCount={set.pushupCount}
            setIndex={index}
            currentSetIndex={currentSetIndex}
          />
        ))}
      </Box>
    </Box>
  );
}