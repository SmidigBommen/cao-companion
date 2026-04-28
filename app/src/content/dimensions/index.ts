import { strategy } from "./strategy";
import { structure } from "./structure";
import { processes } from "./processes";
import { rewards } from "./rewards";
import { people } from "./people";
import type { Dimension, DimensionId } from "@/lib/types";

export const dimensions: Dimension[] = [
  strategy,
  structure,
  processes,
  rewards,
  people,
];

export function getDimension(id: DimensionId): Dimension | undefined {
  return dimensions.find((d) => d.id === id);
}

export function getGuideline(dimensionId: DimensionId, guidelineId: string) {
  const dimension = getDimension(dimensionId);
  return dimension?.guidelines.find((g) => g.id === guidelineId);
}
