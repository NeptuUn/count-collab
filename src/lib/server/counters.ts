type CounterRecord = {
  id: string;
  title: string;
  description: string | null;
  count: number;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type CounterHistoryEntry = {
  id: number;
  counterId: string;
  previousValue: number;
  newValue: number;
  changedAt: Date;
};

type CreateCounterInput = {
  title: string;
  description?: string | null;
  isPublic: boolean;
};

const counters = new Map<string, CounterRecord>();
const history = new Map<string, CounterHistoryEntry[]>();
let historyId = 1;

function recordHistory(
  counterId: string,
  previousValue: number,
  newValue: number,
): void {
  const entry: CounterHistoryEntry = {
    id: historyId++,
    counterId,
    previousValue,
    newValue,
    changedAt: new Date(),
  };

  const entries = history.get(counterId) ?? [];
  entries.unshift(entry);
  history.set(counterId, entries);
}

export function createCounter(input: CreateCounterInput): CounterRecord {
  const now = new Date();
  const counter: CounterRecord = {
    id: crypto.randomUUID(),
    title: input.title.trim(),
    description: input.description?.trim() || null,
    count: 0,
    isPublic: input.isPublic,
    createdAt: now,
    updatedAt: now,
  };

  counters.set(counter.id, counter);
  history.set(counter.id, []);

  return counter;
}

export function listPublicCounters(limit = 12): CounterRecord[] {
  return [...counters.values()]
    .filter((counter) => counter.isPublic)
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return b.updatedAt.getTime() - a.updatedAt.getTime();
    })
    .slice(0, limit);
}

export function getCounter(counterId: string): CounterRecord | null {
  return counters.get(counterId) ?? null;
}

export function incrementCounter(
  counterId: string,
  delta = 1,
): CounterRecord | null {
  const counter = counters.get(counterId);
  if (!counter) return null;

  const nextValue = counter.count + delta;
  recordHistory(counterId, counter.count, nextValue);

  const updated: CounterRecord = {
    ...counter,
    count: nextValue,
    updatedAt: new Date(),
  };

  counters.set(counterId, updated);
  return updated;
}

export function getCounterHistory(
  counterId: string,
  limit = 10,
): CounterHistoryEntry[] {
  return (history.get(counterId) ?? []).slice(0, limit);
}
