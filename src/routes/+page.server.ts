import type { PageServerLoad } from './$types';

type PopularCounter = {
  id: string;
  title: string;
  description: string | null;
  count: number;
};

export const load: PageServerLoad = async () => {
  // TODO: Fetch popular counters from database
  const popularCounters: PopularCounter[] = [];
  return {
    popularCounters
  };
};
