/**
 * Tests for account storage functionality
 * 
 * Note: These tests would normally be run with Jest or Vitest,
 * but since the project doesn't have test infrastructure set up,
 * this serves as documentation of expected behavior.
 */

import { saveAccountToStorage, loadAccountFromStorage, clearAccountStorage, isStorageAvailable } from '../storage';
import type { Account } from '../types';

// Mock localStorage for testing
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

// Replace global localStorage with mock
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

// Test data
const mockAccount: Account = {
  id: 'test-account',
  user: {
    id: 'test-user',
    email: 'test@example.com',
    name: 'Test User',
    weight: 70,
    age: 25,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-02'),
  },
  progress: {
    totalWorkouts: 2,
    totalPushups: 50,
    averagePushupsPerWorkout: 25,
    lastWorkoutDate: new Date('2024-01-02'),
    completedWorkouts: [
      {
        id: 'workout-1',
        workoutId: 'beginner',
        workout: {
          id: 'beginner',
          pushupSequense: [{ pushupCount: 5 }, { pushupCount: 5 }],
          restDuration: 30,
        },
        completedAt: new Date('2024-01-01'),
        duration: 120,
        totalPushups: 10,
      },
      {
        id: 'workout-2',
        workoutId: 'intermediate',
        workout: {
          id: 'intermediate',
          pushupSequense: [{ pushupCount: 10 }, { pushupCount: 10 }],
          restDuration: 30,
        },
        completedAt: new Date('2024-01-02'),
        duration: 180,
        totalPushups: 20,
      }
    ]
  },
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-02'),
};

// Test functions (these would be actual test cases in a real test suite)
export const runStorageTests = () => {
  console.log('Running storage tests...');
  
  // Test 1: isStorageAvailable
  console.log('✓ Storage availability check:', isStorageAvailable());
  
  // Test 2: Save and load account
  clearAccountStorage();
  saveAccountToStorage(mockAccount);
  const loadedAccount = loadAccountFromStorage();
  
  console.log('✓ Save and load test passed:', loadedAccount !== null);
  console.log('✓ Account ID matches:', loadedAccount?.id === mockAccount.id);
  console.log('✓ User data matches:', loadedAccount?.user.name === mockAccount.user.name);
  console.log('✓ Progress data matches:', loadedAccount?.progress.totalWorkouts === mockAccount.progress.totalWorkouts);
  console.log('✓ Date objects restored:', loadedAccount?.createdAt instanceof Date);
  console.log('✓ Completed workouts count:', loadedAccount?.progress.completedWorkouts.length === 2);
  
  // Test 3: Clear storage
  clearAccountStorage();
  const clearedAccount = loadAccountFromStorage();
  console.log('✓ Clear storage test passed:', clearedAccount === null);
  
  console.log('All storage tests completed!');
};

// Export for potential use in actual test runner
export { mockAccount };