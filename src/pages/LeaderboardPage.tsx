import { useStore } from '@tanstack/react-store';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { accountStore, accountActions } from '../modules/account/accountStore';
import { LeaderboardTable } from '../components/molecules/LeaderboardTable';
import { SimplePageContent } from '../components/molecules/SimplePageContent';
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
      <SimplePageContent
        title={PAGE_CONTENT.LEADERBOARD.TITLE}
        subtitle={PAGE_CONTENT.LEADERBOARD.SUBTITLE}
        description="Compete with other users and climb the leaderboard by completing more pushups!"
      >
        <LeaderboardTable accounts={allAccounts} />
      </SimplePageContent>
    </Box>
  );
}
