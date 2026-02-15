import { io } from "socket.io-client";

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

// Socket store
export const socket = createSocketStore();

