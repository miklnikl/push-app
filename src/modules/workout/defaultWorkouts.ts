import type { Workout } from './types';

export const defaultWorkouts: Workout[] = [
  {
    id: 'beginner-pushup',
    pushupSequense: [
      { pushupCount: 5 },
      { pushupCount: 5 },
      { pushupCount: 5 },
      { pushupCount: 5 },
      { pushupCount: 5 },
    ],
    restDuration: 30, // 30 seconds rest between sets
    notes: 'Beginner pushup workout - 5 sets of 5 pushups',
  },
  {
    id: 'intermediate-pushup',
    pushupSequense: [
      { pushupCount: 10 },
      { pushupCount: 10 },
      { pushupCount: 8 },
      { pushupCount: 8 },
      { pushupCount: 6 },
    ],
    restDuration: 30,
    notes: 'Intermediate pushup workout - progressive sets',
  },
  {
    id: 'advanced-pushup',
    pushupSequense: [
      { pushupCount: 15 },
      { pushupCount: 15 },
      { pushupCount: 12 },
      { pushupCount: 10 },
      { pushupCount: 8 },
    ],
    restDuration: 30,
    notes: 'Advanced pushup workout - high volume sets',
  },
];

export const getDefaultWorkout = (): Workout => {
  return defaultWorkouts[0]; // Return beginner workout as default
};