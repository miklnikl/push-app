import { useStore } from '@tanstack/react-store';
import { Box, Typography } from '@mui/material';
import { accountStore } from '../modules/account/accountStore';
import { CompletedWorkoutsTable } from '../components/molecules/CompletedWorkoutsTable';
import { ProgressSummary } from '../components/molecules/ProgressSummary';
import { SimplePageContent } from '../components/molecules/SimplePageContent';
import { PAGE_CONTENT } from '../modules/common/constants';

export function ProgressPage() {
  const accountState = useStore(accountStore);
  const { currentAccount } = accountState;

  return (
    <Box p={3}>
      <SimplePageContent
        title={PAGE_CONTENT.PROGRESS.TITLE}
        subtitle={PAGE_CONTENT.PROGRESS.SUBTITLE}
      >
        <ProgressSummary progress={currentAccount.progress} />
        
        <Typography variant="h5" gutterBottom mt={4}>
          Workout History
        </Typography>
        <CompletedWorkoutsTable completedWorkouts={currentAccount.progress.completedWorkouts} />
      </SimplePageContent>
    </Box>
  );
}
