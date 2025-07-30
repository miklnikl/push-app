import { useEffect, useState } from 'react';
import { useStore } from '@tanstack/react-store';
import {
  Typography,
  Box,
  Button,
  Alert,
  LinearProgress,
  Chip,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';
import { workoutStore, workoutActions } from '../modules/workout/workoutStore';

export function WorkoutPage() {
  const workoutState = useStore(workoutStore);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  const {
    currentWorkout,
    currentSetIndex,
    isSetCompleted,
    isRestingBetweenSets,
    restTimeRemaining,
    isWorkoutCompleted,
  } = workoutState;

  const currentSet = currentWorkout.pushupSequense[currentSetIndex];
  const totalSets = currentWorkout.pushupSequense.length;
  const workoutProgress = ((currentSetIndex + (isSetCompleted ? 1 : 0)) / totalSets) * 100;

  // Handle rest timer
  useEffect(() => {
    if (isRestingBetweenSets && restTimeRemaining > 0) {
      const interval = setInterval(() => {
        workoutActions.updateRestTimer(restTimeRemaining - 1);
      }, 1000);
      setTimerInterval(interval);
      return () => clearInterval(interval);
    } else if (isRestingBetweenSets && restTimeRemaining === 0) {
      workoutActions.startNextSet();
    }
  }, [isRestingBetweenSets, restTimeRemaining]);

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const handleCompleteSet = () => {
    workoutActions.completeSet();
  };

  const handleStartNewWorkout = () => {
    workoutActions.resetWorkout();
  };

  // Show congratulations when workout is completed
  if (isWorkoutCompleted) {
    const totalPushups = currentWorkout.pushupSequense.reduce((sum, set) => sum + set.pushupCount, 0);
    return (
      <>
        <Alert severity='success' sx={{ mb: 2 }}>
          <Typography variant='h5'>🎉 Congratulations! 🎉</Typography>
          <Typography variant='h6' sx={{ mt: 1 }}>
            Workout Completed!
          </Typography>
          <Typography sx={{ mt: 1 }}>
            You completed all {totalSets} sets and did a total of {totalPushups} pushups!
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }}>
            Great job! Keep up the excellent work!
          </Typography>
        </Alert>
        <Box display='flex' justifyContent='center' mt={2}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleStartNewWorkout}
            sx={{ px: 4, py: 1, fontSize: '1.1rem' }}
          >
            Start New Workout
          </Button>
        </Box>
      </>
    );
  }

  // Show rest timer between sets
  if (isRestingBetweenSets) {
    return (
      <>
        <Typography variant='h4' gutterBottom textAlign='center'>
          Rest Time
        </Typography>
        <Box display='flex' flexDirection='column' alignItems='center' gap={3} mt={4}>
          <Box position='relative' display='inline-flex'>
            <CircularProgress
              variant='determinate'
              value={(restTimeRemaining / currentWorkout.restDuration) * 100}
              size={200}
              thickness={4}
            />
            <Box
              position='absolute'
              top={0}
              left={0}
              bottom={0}
              right={0}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Typography variant='h2' component='div' color='text.secondary'>
                {restTimeRemaining}
              </Typography>
            </Box>
          </Box>
          <Typography variant='h6' textAlign='center'>
            Get ready for Set {currentSetIndex + 2}
          </Typography>
          <Typography variant='body1' textAlign='center'>
            Next set: {currentWorkout.pushupSequense[currentSetIndex + 1].pushupCount} pushups
          </Typography>
          <Button
            variant='outlined'
            onClick={() => workoutActions.startNextSet()}
            sx={{ mt: 2 }}
          >
            Skip Rest
          </Button>
        </Box>
      </>
    );
  }

  return (
    <>
      <Typography variant='h4' gutterBottom textAlign='center'>
        Pushup Workout
      </Typography>

      {/* Workout Progress */}
      <Box mb={3}>
        <Box display='flex' justifyContent='space-between' alignItems='center' mb={1}>
          <Typography variant='body2'>
            Set {currentSetIndex + 1} of {totalSets}
          </Typography>
          <Typography variant='body2'>
            {Math.round(workoutProgress)}% Complete
          </Typography>
        </Box>
        <LinearProgress variant='determinate' value={workoutProgress} sx={{ height: 8, borderRadius: 4 }} />
      </Box>

      {/* Sets Overview */}
      <Box mb={3}>
        <Typography variant='h6' gutterBottom>
          Sets Overview
        </Typography>
        <Box display='flex' gap={1} flexWrap='wrap'>
          {currentWorkout.pushupSequense.map((set, index) => (
            <Chip
              key={index}
              label={`${set.pushupCount}`}
              color={
                index < currentSetIndex
                  ? 'success'
                  : index === currentSetIndex
                  ? 'primary'
                  : 'default'
              }
              variant={index === currentSetIndex ? 'filled' : 'outlined'}
              sx={{
                fontSize: '1rem',
                height: 40,
                minWidth: 50,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Current Set */}
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
              {currentSet.pushupCount}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              onClick={handleCompleteSet}
              disabled={isSetCompleted}
              sx={{ mt: 2, px: 4, py: 1, fontSize: '1.1rem' }}
            >
              {isSetCompleted ? 'Set Completed!' : 'Complete Set'}
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Workout Info */}
      <Box textAlign='center'>
        <Typography variant='body2' color='text.secondary'>
          {currentWorkout.notes}
        </Typography>
      </Box>
    </>
  );
}