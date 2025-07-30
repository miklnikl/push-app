import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import type { CompletedWorkout } from '../../modules/account/types';

type CompletedWorkoutsTableProps = {
  completedWorkouts: CompletedWorkout[];
};

export function CompletedWorkoutsTable({ completedWorkouts }: CompletedWorkoutsTableProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (completedWorkouts.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h6" color="text.secondary">
          No completed workouts yet
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Complete your first workout to see your progress here!
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Workout</TableCell>
            <TableCell align="right">Sets</TableCell>
            <TableCell align="right">Total Pushups</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {completedWorkouts
            .sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime()) // Most recent first
            .map((workout) => (
              <TableRow key={workout.id}>
                <TableCell>
                  <Typography variant="body2">
                    {formatDate(workout.completedAt)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="medium">
                    {workout.workout.notes || workout.workoutId}
                  </Typography>
                  <Box mt={0.5}>
                    {workout.workout.pushupSequense.map((set, index) => (
                      <Chip
                        key={index}
                        label={set.pushupCount}
                        size="small"
                        variant="outlined"
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">
                    {workout.workout.pushupSequense.length}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2" fontWeight="medium" color="primary">
                    {workout.totalPushups}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">
                    {formatDuration(workout.duration)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {workout.notes || '-'}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}