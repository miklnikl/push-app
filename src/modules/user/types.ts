import type { WorkoutLevel } from '../workout/constants';

export type User = {
    id: string;
    email: string;
    name: string;
    weight?: number; // in kg
    age?: number;
    workoutLevel: WorkoutLevel;
    createdAt: Date;
    updatedAt: Date;
}