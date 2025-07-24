export type Workout = {
  id: string;
  pushupSequense: PushupSet[];
  restDuration: number; // in seconds
  duration?: number; // in seconds
  notes?: string;
};

export type PushupSet = {
  pushupCount: number;
};