import { Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Alert } from '@mui/material';
import { useStore } from '@tanstack/react-store';
import { accountStore, accountActions } from '../modules/account/accountStore';
import { WORKOUT_LEVELS, WORKOUT_LEVEL_LABELS, type WorkoutLevel } from '../modules/workout/constants';
import { useState } from 'react';

export function AccountSettingsPage() {
  const currentAccount = useStore(accountStore, (state) => state.currentAccount);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const handleWorkoutLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLevel = event.target.value as WorkoutLevel;
    accountActions.updateWorkoutLevel(newLevel);
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Account Settings
      </Typography>

      {/* User Info Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Profile Information
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Name: {currentAccount.user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Email: {currentAccount.user.email}
        </Typography>
        {currentAccount.user.age && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Age: {currentAccount.user.age} years
          </Typography>
        )}
        {currentAccount.user.weight && (
          <Typography variant="body2" color="text.secondary">
            Weight: {currentAccount.user.weight} kg
          </Typography>
        )}
      </Box>

      {/* Workout Level Section */}
      <Box>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="h6" gutterBottom>
              Current Workout Level
            </Typography>
          </FormLabel>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Choose your current fitness level to get appropriate workout recommendations.
          </Typography>
          <RadioGroup
            value={currentAccount.user.workoutLevel}
            onChange={handleWorkoutLevelChange}
            name="workout-level"
          >
            <FormControlLabel
              value={WORKOUT_LEVELS.BEGINNER}
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1">{WORKOUT_LEVEL_LABELS[WORKOUT_LEVELS.BEGINNER]}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    New to pushups or getting back into fitness
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value={WORKOUT_LEVELS.INTERMEDIATE}
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1">{WORKOUT_LEVEL_LABELS[WORKOUT_LEVELS.INTERMEDIATE]}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Can do 10+ pushups and workout regularly
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value={WORKOUT_LEVELS.ADVANCED}
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1">{WORKOUT_LEVEL_LABELS[WORKOUT_LEVELS.ADVANCED]}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Can do 20+ pushups and maintain high intensity
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Success Message */}
      {showSavedMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Workout level updated successfully!
        </Alert>
      )}
    </Box>
  );
}