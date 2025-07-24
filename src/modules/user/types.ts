export type User = {
    id: string;
    email: string;
    name: string;
    weight?: number; // in kg
    age?: number;
    createdAt: Date;
    updatedAt: Date;
}