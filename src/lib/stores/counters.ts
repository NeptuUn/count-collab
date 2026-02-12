import { writable, derived } from 'svelte/store';
import { io } from 'socket.io-client';
import type { Counter } from '$lib/db/schema';

// Socket connection store
function createSocketStore() {
  const socket = io({
    path: '/socket.io'
  });

  return {
    subscribe: (fn: (value: any) => void) => socket,
    emit: (event: string, data: any) => socket.emit(event, data)
  };
}

// Active counters store
export const activeCounters = writable<Map<string, Counter>>(new Map());

// Socket store
export const socket = createSocketStore();

// Counter subscription
export function subscribeToCounter(counterId: string) {
  socket.emit('counter:subscribe', counterId);
}

export function unsubscribeFromCounter(counterId: string) {
  socket.emit('counter:unsubscribe', counterId);
}
