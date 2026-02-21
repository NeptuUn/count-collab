import { error, json } from "@sveltejs/kit";
import { incrementCounter } from "$lib/server/counters";
import { logger } from "$lib/server/logger";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ params }) => {
  const counter = incrementCounter(params.id, 1);

  if (!counter) {
    logger.warn("Increment failed: counter not found", { id: params.id });
    throw error(404, "Counter not found");
  }

  return json({
    count: counter.count,
    updatedAt: counter.updatedAt,
  });
};
