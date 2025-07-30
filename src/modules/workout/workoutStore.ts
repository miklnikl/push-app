import { Store } from '@tanstack/react-store';
import type { Workout } from './types';
import { getDefaultWorkout } from './defaultWorkouts';
import { accountActions } from '../account/accountStore';

export type WorkoutState = {
  currentWorkout: Workout;
  currentSetIndex: number;
  currentPushupCount: number;
  isSetCompleted: boolean;
  isRestingBetweenSets: boolean;
  restTimeRemaining: number;
  isWorkoutCompleted: boolean;
  workoutStartTime?: Date;
};

export const workoutStore = new Store<WorkoutState>({
  currentWorkout: getDefaultWorkout(),
  currentSetIndex: 0,
  currentPushupCount: 0,
  isSetCompleted: false,
  isRestingBetweenSets: false,
  restTimeRemaining: 0,
  isWorkoutCompleted: false,
  workoutStartTime: undefined,
});

// Action creators
export const workoutActions = {
  startWorkout: () => {
    workoutStore.setState(state => ({
      ...state,
      workoutStartTime: new Date(),
    }));
  },

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
        // Calculate workout duration
        const workoutDuration = state.workoutStartTime 
          ? Math.floor((Date.now() - state.workoutStartTime.getTime()) / 1000)
          : 0;

        // Add completed workout to account
        accountActions.addCompletedWorkout(state.currentWorkout, workoutDuration);

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
      workoutStartTime: undefined,
    });
  },
};