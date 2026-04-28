const KEY = "cao:read";

export type ProgressStore = Record<string, true>;

export function loadProgress(): ProgressStore {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

function save(store: ProgressStore): void {
  localStorage.setItem(KEY, JSON.stringify(store));
}

export function markRead(dimension: string, guideline: string): void {
  const store = loadProgress();
  store[`${dimension}/${guideline}`] = true;
  save(store);
}

export function markUnread(dimension: string, guideline: string): void {
  const store = loadProgress();
  delete store[`${dimension}/${guideline}`];
  save(store);
}

export function progressKey(dimension: string, guideline: string): string {
  return `${dimension}/${guideline}`;
}
