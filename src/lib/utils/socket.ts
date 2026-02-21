// Socket.IO server-side emitters.
// The Socket.IO server instance is initialized in socket-dev.ts
// (called from vite.config.ts in dev, or from a custom server in production).

import { getIO } from "$lib/utils/socket-dev";

export function emitCounterUpdate(
  counterId: string,
  count: number,
  updatedAt: Date,
): void {
  getIO()?.emit("counter:updated", { counterId, count, updatedAt });
}

export function emitCounterCreated(counterId: string): void {
  getIO()?.emit("counter:created", { counterId });
}
