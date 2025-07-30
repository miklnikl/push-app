import type { Workout } from './types';

/**
 * Calculate the overall workout progress as a percentage
 */
export const calculateWorkoutProgress = (
  currentSetIndex: number,
  isSetCompleted: boolean,
  totalSets: number
): number => {
  const completedSets = currentSetIndex + (isSetCompleted ? 1 : 0);
  return (completedSets / totalSets) * 100;
};

/**
 * Calculate the total number of pushups in a workout
 */
export const calculateTotalPushups = (workout: Workout): number => {
  return workout.pushupSequense.reduce((sum, set) => sum + set.pushupCount, 0);
};

/**
 * Calculate the rest timer progress as a percentage
 */
export const calculateRestProgress = (
  remainingTime: number,
  totalRestDuration: number
): number => {
  return (remainingTime / totalRestDuration) * 100;
};

/**
 * Validate pushup count input
 */
export const validatePushupCount = (
  value: string,
  maxCount: number
): number | null => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue) || parsedValue < 0) {
    return null;
  }
  return Math.min(parsedValue, maxCount);
};

/**
 * Format the rest timer display
 */
export const formatRestTime = (seconds: number): string => {
  return seconds.toString();
};

/**
 * Determine the chip color based on set completion status
 */
export const getSetChipColor = (
  setIndex: number,
  currentSetIndex: number
): 'success' | 'primary' | 'default' => {
  if (setIndex < currentSetIndex) {
    return 'success';
  } else if (setIndex === currentSetIndex) {
    return 'primary';
  }
  return 'default';
};

/**
 * Determine the chip variant based on current set
 */
export const getSetChipVariant = (
  setIndex: number,
  currentSetIndex: number
): 'filled' | 'outlined' => {
  return setIndex === currentSetIndex ? 'filled' : 'outlined';
};