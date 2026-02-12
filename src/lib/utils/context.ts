import { writable, type Writable } from 'svelte/store';

/**
 * Create a typed context helper for managing reactive state
 * following Svelte 5 runes pattern
 */
export function createContext<T>(key: string): {
  provide: (value: T) => void;
  inject: () => T;
} {
  return {
    provide: (value: T) => {
      // Implementation would use setContext
    },
    inject: (): T => {
      // Implementation would use getContext
      throw new Error(`Context "${key}" not found`);
    }
  };
}
