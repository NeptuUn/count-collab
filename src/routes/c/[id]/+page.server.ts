import { error, fail } from "@sveltejs/kit";
import {
  getCounter,
  getCounterHistory,
  incrementCounter,
} from "$lib/server/counters";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, depends }) => {
  const counter = getCounter(params.id);

  if (!counter) {
    throw error(404, "Counter not found");
  }

  depends(`counter:${params.id}`);

  return {
    counter,
    history: getCounterHistory(params.id),
  };
};

export const actions: Actions = {
  increment: async ({ params }) => {
    const counter = incrementCounter(params.id, 1);

    if (!counter) {
      return fail(404, { message: "Counter not found." });
    }

    return {
      count: counter.count,
      updatedAt: counter.updatedAt,
    };
  },
};
