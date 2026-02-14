import { listPublicCounters } from "$lib/server/counters";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    popularCounters: listPublicCounters(6),
  };
};
