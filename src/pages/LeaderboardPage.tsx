import { Typography, Box } from '@mui/material';

export function LeaderboardPage() {
  return (
    <>
      <Typography variant='h4' gutterBottom>
        Leaderboard Page
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        See how you compare with other users!
      </Typography>
      <Box mt={2}>
        <Typography>
          Leaderboard rankings will be available here soon.
        </Typography>
      </Box>
    </>
  );
}
