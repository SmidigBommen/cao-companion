import { dimensions } from "@/content/dimensions";
import { splitTitle } from "@/lib/utils";
import type { DimensionId } from "@/lib/types";

export interface ConceptEntry {
  term: string;
  definition: string;
  dimensionId: DimensionId;
  dimensionLabel: string;
  guidelineId: string;
  guidelineNumber: string | null;
  guidelineName: string;
}

export function getAllConcepts(): ConceptEntry[] {
  const entries: ConceptEntry[] = [];
  for (const dim of dimensions) {
    for (const guideline of dim.guidelines) {
      const { number, name } = splitTitle(guideline.title);
      for (const concept of guideline.concepts) {
        entries.push({
          term: concept.term,
          definition: concept.definition,
          dimensionId: dim.id,
          dimensionLabel: dim.label,
          guidelineId: guideline.id,
          guidelineNumber: number,
          guidelineName: name,
        });
      }
    }
  }
  return entries.sort((a, b) => a.term.localeCompare(b.term));
}
