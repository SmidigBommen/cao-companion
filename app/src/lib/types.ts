export type DimensionId =
  | "strategy"
  | "structure"
  | "processes"
  | "rewards"
  | "people";

export interface Guideline {
  id: string;
  title: string;
  summary: string;
  why: string;
  antiPattern: string;
  concepts: Concept[];
  bookChapter?: string;
}

export interface Concept {
  term: string;
  definition: string;
}

export interface Dimension {
  id: DimensionId;
  label: string;
  description: string;
  guidelines: Guideline[];
}

export interface StarPoint {
  id: DimensionId;
  label: string;
  angle: number;
}
