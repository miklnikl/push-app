import { useStore } from '@tanstack/react-store';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { accountStore, accountActions } from '../modules/account/accountStore';
import { LeaderboardTable } from '../components/molecules/LeaderboardTable';
import { PAGE_CONTENT } from '../modules/common/constants';

export function LeaderboardPage() {
  const accountState = useStore(accountStore);
  const { allAccounts } = accountState;

  // Add mock accounts for demonstration on component mount
  useEffect(() => {
    accountActions.addMockAccounts();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        {PAGE_CONTENT.LEADERBOARD.TITLE}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {PAGE_CONTENT.LEADERBOARD.SUBTITLE}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom mb={3}>
        Compete with other users and climb the leaderboard by completing more pushups!
      </Typography>
      
      <LeaderboardTable accounts={allAccounts} />
    </Box>
  );
}
