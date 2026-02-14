import { io } from "socket.io-client";
import { writable } from "svelte/store";
import type { Counter } from "$lib//db/schema";

// Socket connection store
function createSocketStore() {
  const socket = io({
    path: "/socket.io",
  });

  return {
    // biome-ignore lint: sry :)
    subscribe: (_fn: (value: any) => void) => socket,
    // biome-ignore lint: sry :)
    emit: (event: string, data: any) => socket.emit(event, data),
  };
}

// Active counters store
export const activeCounters = writable<Map<string, Counter>>(new Map());

// Socket store
export const socket = createSocketStore();

// Counter subscription
export function subscribeToCounter(counterId: string) {
  socket.emit("counter:subscribe", counterId);
}

export function unsubscribeFromCounter(counterId: string) {
  socket.emit("counter:unsubscribe", counterId);
}
