import type { Account } from './types';

const ACCOUNT_STORAGE_KEY = 'push-app-account-data';
const STORAGE_VERSION = '1.0';

export type StoredAccountData = {
  version: string;
  account: Account;
  timestamp: number;
};

/**
 * Serialize account data for localStorage storage
 */
const serializeAccount = (account: Account): string => {
  const storageData: StoredAccountData = {
    version: STORAGE_VERSION,
    account: {
      ...account,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
      progress: {
        ...account.progress,
        lastWorkoutDate: account.progress.lastWorkoutDate,
        completedWorkouts: account.progress.completedWorkouts.map(workout => ({
          ...workout,
          completedAt: workout.completedAt,
        }))
      }
    },
    timestamp: Date.now(),
  };
  
  return JSON.stringify(storageData, null, 0);
};

/**
 * Deserialize account data from localStorage
 */
const deserializeAccount = (data: string): Account | null => {
  try {
    const parsed: StoredAccountData = JSON.parse(data);
    
    // Check version compatibility
    if (parsed.version !== STORAGE_VERSION) {
      console.warn('Account storage version mismatch, ignoring stored data');
      return null;
    }
    
    // Reconstruct Date objects
    const account: Account = {
      ...parsed.account,
      createdAt: new Date(parsed.account.createdAt),
      updatedAt: new Date(parsed.account.updatedAt),
      progress: {
        ...parsed.account.progress,
        lastWorkoutDate: parsed.account.progress.lastWorkoutDate 
          ? new Date(parsed.account.progress.lastWorkoutDate)
          : undefined,
        completedWorkouts: parsed.account.progress.completedWorkouts.map(workout => ({
          ...workout,
          completedAt: new Date(workout.completedAt),
        }))
      }
    };
    
    return account;
  } catch (error) {
    console.error('Failed to deserialize account data:', error);
    return null;
  }
};

/**
 * Save account data to localStorage
 */
export const saveAccountToStorage = (account: Account): void => {
  try {
    const serialized = serializeAccount(account);
    localStorage.setItem(ACCOUNT_STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Failed to save account to localStorage:', error);
  }
};

/**
 * Load account data from localStorage
 */
export const loadAccountFromStorage = (): Account | null => {
  try {
    const stored = localStorage.getItem(ACCOUNT_STORAGE_KEY);
    if (!stored) return null;
    
    return deserializeAccount(stored);
  } catch (error) {
    console.error('Failed to load account from localStorage:', error);
    return null;
  }
};

/**
 * Clear account data from localStorage
 */
export const clearAccountStorage = (): void => {
  try {
    localStorage.removeItem(ACCOUNT_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear account storage:', error);
  }
};

/**
 * Check if localStorage is available and working
 */
export const isStorageAvailable = (): boolean => {
  try {
    const testKey = '__push_app_storage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};