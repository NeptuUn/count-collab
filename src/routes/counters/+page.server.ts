import type { PageServerLoad } from "./$types";
import { listPublicCounters } from "$lib/server/counters";

export const load: PageServerLoad = async () => {
  return {
    counters: listPublicCounters(100),
  };
};
