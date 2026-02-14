import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// TODO: Use environment variables in production
const queryClient = postgres(
  process.env.DATABASE_URL ||
    "postgres://user:password@localhost:5432/count_collab",
);

export const db = drizzle(queryClient, { schema });

export type DB = typeof db;
