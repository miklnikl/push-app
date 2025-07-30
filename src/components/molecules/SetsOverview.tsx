import { Box, Typography } from '@mui/material';
import { SimpleSetChip } from '../atoms/SimpleSetChip';
import type { Workout } from '../../modules/workout/types';

type SetsOverviewProps = {
  workout: Workout;
  currentSetIndex: number;
};

export function SetsOverview({ workout, currentSetIndex }: SetsOverviewProps) {
  return (
    <Box mb={3}>
      <Typography variant='h6' gutterBottom>
        Sets Overview
      </Typography>
      <Box display='flex' gap={1} flexWrap='wrap'>
        {workout.pushupSequense.map((set, index) => (
          <SimpleSetChip
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