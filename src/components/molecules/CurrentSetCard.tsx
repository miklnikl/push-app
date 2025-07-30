import { Box, Card, CardContent, Typography, Button } from '@mui/material';

type CurrentSetCardProps = {
  pushupCount: number;
  isSetCompleted: boolean;
  onCompleteSet: () => void;
  workoutNotes?: string;
};

export function CurrentSetCard({ pushupCount, isSetCompleted, onCompleteSet, workoutNotes }: CurrentSetCardProps) {
  return (
    <>
      <Card sx={{ mb: 3, backgroundColor: theme => theme.palette.primary.light + '20' }}>
        <CardContent>
          <Typography variant='h6' gutterBottom textAlign='center'>
            Current Set
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' gap={2} mt={2}>
            <Typography
              variant='h2'
              color='primary'
              sx={{ fontWeight: 700, fontSize: { xs: '3rem', md: '4rem' } }}
            >
              {pushupCount}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              onClick={onCompleteSet}
              disabled={isSetCompleted}
              sx={{ mt: 2, px: 4, py: 1, fontSize: '1.1rem' }}
            >
              {isSetCompleted ? 'Set Completed!' : 'Complete Set'}
            </Button>
          </Box>
        </CardContent>
      </Card>

      {workoutNotes && (
        <Box textAlign='center'>
          <Typography variant='body2' color='text.secondary'>
            {workoutNotes}
          </Typography>
        </Box>
      )}
    </>
  );
}