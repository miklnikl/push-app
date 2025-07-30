export const WORKOUT_MESSAGES = {
  CONGRATULATIONS: {
    TITLE: '🎉 Congratulations! 🎉',
    SUBTITLE: 'Workout Completed!',
    DESCRIPTION: (totalSets: number, totalPushups: number) => 
      `You completed all ${totalSets} sets and did a total of ${totalPushups} pushups!`,
    ENCOURAGEMENT: 'Great job! Keep up the excellent work!',
  },
  REST: {
    TITLE: 'Rest Time',
    GET_READY: (setNumber: number) => `Get ready for Set ${setNumber}`,
    NEXT_SET: (pushupCount: number) => `Next set: ${pushupCount} pushups`,
  },
  WORKOUT: {
    TITLE: 'Pushup Workout',
    SETS_OVERVIEW: 'Sets Overview',
    CURRENT_SET: (pushupCount: number) => `Current Set: ${pushupCount} Pushups`,
    PROGRESS: (current: number, total: number) => `Progress: ${current} / ${total}`,
    SET_INDICATOR: (current: number, total: number) => `Set ${current} of ${total}`,
    COMPLETE_PERCENTAGE: (percentage: number) => `${percentage}% Complete`,
  },
  BUTTONS: {
    START_NEW_WORKOUT: 'Start New Workout',
    COMPLETE_SET: 'Complete Set',
    SET_COMPLETED: 'Set Completed!',
    SKIP_REST: 'Skip Rest',
  },
};

export const WORKOUT_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
} as const;

export type WorkoutLevel = typeof WORKOUT_LEVELS[keyof typeof WORKOUT_LEVELS];

export const WORKOUT_LEVEL_LABELS = {
  [WORKOUT_LEVELS.BEGINNER]: 'Beginner',
  [WORKOUT_LEVELS.INTERMEDIATE]: 'Intermediate',
  [WORKOUT_LEVELS.ADVANCED]: 'Advanced',
} as const;

export const WORKOUT_CONFIG = {
  BUTTON_STYLES: {
    COUNTER_BUTTON_SIZE: 50,
    COUNTER_FONT_SIZE: '1.5rem',
    PRIMARY_BUTTON_PADDING: { px: 4, py: 1 },
    PRIMARY_BUTTON_FONT: '1.1rem',
  },
  PROGRESS: {
    BAR_HEIGHT: 8,
    BAR_BORDER_RADIUS: 4,
    CIRCULAR_TIMER_SIZE: 200,
    CIRCULAR_TIMER_THICKNESS: 4,
  },
  CHIP: {
    FONT_SIZE: '1rem',
    HEIGHT: 40,
    MIN_WIDTH: 50,
  },
};