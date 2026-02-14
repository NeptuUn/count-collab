// Socket.IO server utilities
import { Server } from "socket.io";
import type { Server as HTTPServer } from "http";

let io: Server | null = null;

export function initializeSocket(httpServer: HTTPServer): Server {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.ALLOWED_ORIGINS?.split(",") || [
        "http://localhost:5174",
      ],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });

    // Counter events
    socket.on("counter:increment", (counterId: string) => {
      io?.emit("counter:updated", { counterId });
    });

    socket.on("counter:decrement", (counterId: string) => {
      io?.emit("counter:updated", { counterId });
    });
  });

  return io;
}

export function getSocket(): Server | null {
  return io;
}

export function emitCounterUpdate(counterId: string, newValue: number): void {
  io?.emit("counter:updated", { counterId, value: newValue });
}
