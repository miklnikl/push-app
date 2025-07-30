import { Store } from '@tanstack/react-store';
import type { Account, CompletedWorkout, Progress } from './types';
import type { User } from '../user/types';
import type { Workout } from '../workout/types';

// Mock user data for development
const mockUser: User = {
  id: 'user-1',
  email: 'john.doe@example.com',
  name: 'John Doe',
  weight: 75,
  age: 30,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date(),
};

// Calculate progress from completed workouts
const calculateProgress = (completedWorkouts: CompletedWorkout[]): Progress => {
  const totalWorkouts = completedWorkouts.length;
  const totalPushups = completedWorkouts.reduce((sum, workout) => sum + workout.totalPushups, 0);
  const averagePushupsPerWorkout = totalWorkouts > 0 ? Math.round(totalPushups / totalWorkouts) : 0;
  const lastWorkoutDate = completedWorkouts.length > 0 
    ? new Date(Math.max(...completedWorkouts.map(w => w.completedAt.getTime()))) 
    : undefined;

  return {
    totalWorkouts,
    totalPushups,
    completedWorkouts,
    averagePushupsPerWorkout,
    lastWorkoutDate,
  };
};

// Initial account state
const initialProgress = calculateProgress([]);
const initialAccount: Account = {
  id: 'account-1',
  user: mockUser,
  progress: initialProgress,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date(),
};

export type AccountState = {
  currentAccount: Account;
  allAccounts: Account[]; // For leaderboard
};

export const accountStore = new Store<AccountState>({
  currentAccount: initialAccount,
  allAccounts: [initialAccount], // Start with current account in leaderboard
});

// Action creators
export const accountActions = {
  addCompletedWorkout: (workout: Workout, duration: number, notes?: string) => {
    accountStore.setState(state => {
      const completedWorkout: CompletedWorkout = {
        id: `completed-${Date.now()}`,
        workoutId: workout.id,
        workout,
        completedAt: new Date(),
        duration,
        totalPushups: workout.pushupSequense.reduce((sum, set) => sum + set.pushupCount, 0),
        notes,
      };

      const updatedCompletedWorkouts = [...state.currentAccount.progress.completedWorkouts, completedWorkout];
      const updatedProgress = calculateProgress(updatedCompletedWorkouts);
      
      const updatedAccount: Account = {
        ...state.currentAccount,
        progress: updatedProgress,
        updatedAt: new Date(),
      };

      // Update current account in allAccounts array
      const updatedAllAccounts = state.allAccounts.map(account => 
        account.id === updatedAccount.id ? updatedAccount : account
      );

      return {
        currentAccount: updatedAccount,
        allAccounts: updatedAllAccounts,
      };
    });
  },

  // Mock function to add more accounts for leaderboard demonstration
  addMockAccounts: () => {
    accountStore.setState(state => {
      // Don't add if we already have mock accounts
      if (state.allAccounts.length > 1) return state;

      const mockAccounts: Account[] = [
        {
          id: 'account-2',
          user: {
            id: 'user-2',
            email: 'jane.smith@example.com',
            name: 'Jane Smith',
            age: 28,
            createdAt: new Date('2024-01-05'),
            updatedAt: new Date(),
          },
          progress: calculateProgress([
            {
              id: 'completed-1',
              workoutId: 'beginner-pushup',
              workout: { id: 'beginner-pushup', pushupSequense: [{ pushupCount: 5 }, { pushupCount: 5 }, { pushupCount: 5 }, { pushupCount: 5 }, { pushupCount: 5 }], restDuration: 30 },
              completedAt: new Date('2024-01-10'),
              duration: 180,
              totalPushups: 25,
            },
            {
              id: 'completed-2',
              workoutId: 'intermediate-pushup',
              workout: { id: 'intermediate-pushup', pushupSequense: [{ pushupCount: 10 }, { pushupCount: 10 }, { pushupCount: 8 }, { pushupCount: 8 }, { pushupCount: 6 }], restDuration: 30 },
              completedAt: new Date('2024-01-12'),
              duration: 240,
              totalPushups: 42,
            },
          ]),
          createdAt: new Date('2024-01-05'),
          updatedAt: new Date(),
        },
        {
          id: 'account-3',
          user: {
            id: 'user-3',
            email: 'mike.johnson@example.com',
            name: 'Mike Johnson',
            age: 35,
            createdAt: new Date('2024-01-03'),
            updatedAt: new Date(),
          },
          progress: calculateProgress([
            {
              id: 'completed-3',
              workoutId: 'advanced-pushup',
              workout: { id: 'advanced-pushup', pushupSequense: [{ pushupCount: 15 }, { pushupCount: 15 }, { pushupCount: 12 }, { pushupCount: 10 }, { pushupCount: 8 }], restDuration: 30 },
              completedAt: new Date('2024-01-08'),
              duration: 300,
              totalPushups: 60,
            },
          ]),
          createdAt: new Date('2024-01-03'),
          updatedAt: new Date(),
        },
      ];

      return {
        ...state,
        allAccounts: [...state.allAccounts, ...mockAccounts],
      };
    });
  },

  getCurrentAccount: () => accountStore.state.currentAccount,
  getAllAccounts: () => accountStore.state.allAccounts,
};