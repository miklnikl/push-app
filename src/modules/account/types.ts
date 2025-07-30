import type { User } from '../user/types';
import type { Workout } from '../workout/types';

export type CompletedWorkout = {
  id: string;
  workoutId: string;
  workout: Workout;
  completedAt: Date;
  duration: number; // in seconds
  totalPushups: number;
  notes?: string;
};

export type Progress = {
  totalWorkouts: number;
  totalPushups: number;
  completedWorkouts: CompletedWorkout[];
  averagePushupsPerWorkout: number;
  lastWorkoutDate?: Date;
};

export type Account = {
  id: string;
  user: User;
  progress: Progress;
  createdAt: Date;
  updatedAt: Date;
};