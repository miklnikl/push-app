import { Typography, Box } from '@mui/material';

export function MainPage() {
  return (
    <>
      <Typography variant='h4' gutterBottom>
        Main Page
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        Welcome to the Push App main page!
      </Typography>
      <Box mt={2}>
        <Typography>
          Start tracking your pushup workouts and progress!
        </Typography>
      </Box>
    </>
  );
}