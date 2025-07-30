import { Typography, Card, CardContent, Grid } from '@mui/material';
import type { Progress } from '../../modules/account/types';

type ProgressSummaryProps = {
  progress: Progress;
};

export function ProgressSummary({ progress }: ProgressSummaryProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card elevation={1}>
          <CardContent>
            <Typography variant="h4" color="primary" fontWeight="bold">
              {progress.totalWorkouts}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Workouts
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card elevation={1}>
          <CardContent>
            <Typography variant="h4" color="secondary" fontWeight="bold">
              {progress.totalPushups}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Pushups
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card elevation={1}>
          <CardContent>
            <Typography variant="h4" color="success.main" fontWeight="bold">
              {progress.averagePushupsPerWorkout}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Average per Workout
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card elevation={1}>
          <CardContent>
            <Typography variant="body1" fontWeight="medium">
              {progress.lastWorkoutDate ? formatDate(progress.lastWorkoutDate) : 'Never'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Workout
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}