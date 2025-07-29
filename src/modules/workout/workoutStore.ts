import { Store } from '@tanstack/react-store';
import type { Workout } from './types';
import { getDefaultWorkout } from './defaultWorkouts';

export type WorkoutState = {
  currentWorkout: Workout;
  currentSetIndex: number;
  currentPushupCount: number;
  isSetCompleted: boolean;
  isRestingBetweenSets: boolean;
  restTimeRemaining: number;
  isWorkoutCompleted: boolean;
};

export const workoutStore = new Store<WorkoutState>({
  currentWorkout: getDefaultWorkout(),
  currentSetIndex: 0,
  currentPushupCount: 0,
  isSetCompleted: false,
  isRestingBetweenSets: false,
  restTimeRemaining: 0,
  isWorkoutCompleted: false,
});

// Action creators
export const workoutActions = {
  incrementPushups: () => {
    workoutStore.setState(state => ({
      ...state,
      currentPushupCount: Math.min(
        state.currentPushupCount + 1,
        state.currentWorkout.pushupSequense[state.currentSetIndex].pushupCount
      ),
    }));
  },

  decrementPushups: () => {
    workoutStore.setState(state => ({
      ...state,
      currentPushupCount: Math.max(0, state.currentPushupCount - 1),
    }));
  },

  setPushupCount: (count: number) => {
    workoutStore.setState(state => ({
      ...state,
      currentPushupCount: Math.max(
        0,
        Math.min(count, state.currentWorkout.pushupSequense[state.currentSetIndex].pushupCount)
      ),
    }));
  },

  completeSet: () => {
    workoutStore.setState(state => {
      const isLastSet = state.currentSetIndex === state.currentWorkout.pushupSequense.length - 1;
      
      if (isLastSet) {
        return {
          ...state,
          isSetCompleted: true,
          isWorkoutCompleted: true,
        };
      } else {
        return {
          ...state,
          isSetCompleted: true,
          isRestingBetweenSets: true,
          restTimeRemaining: state.currentWorkout.restDuration,
        };
      }
    });
  },

  startNextSet: () => {
    workoutStore.setState(state => ({
      ...state,
      currentSetIndex: state.currentSetIndex + 1,
      currentPushupCount: 0,
      isSetCompleted: false,
      isRestingBetweenSets: false,
      restTimeRemaining: 0,
    }));
  },

  updateRestTimer: (timeRemaining: number) => {
    workoutStore.setState(state => ({
      ...state,
      restTimeRemaining: timeRemaining,
    }));
  },

  resetWorkout: () => {
    workoutStore.setState({
      currentWorkout: getDefaultWorkout(),
      currentSetIndex: 0,
      currentPushupCount: 0,
      isSetCompleted: false,
      isRestingBetweenSets: false,
      restTimeRemaining: 0,
      isWorkoutCompleted: false,
    });
  },
};