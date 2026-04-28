"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { loadProgress, progressKey } from "@/lib/progress";
import { splitTitle } from "@/lib/utils";
import type { Guideline, Concept } from "@/lib/types";

interface ConceptWithSource extends Concept {
  guidelineId: string;
  guidelineNumber: string | null;
  guidelineName: string;
}

interface Props {
  guidelines: Guideline[];
  dimension: string;
  color: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function DimensionSelfCheck({ guidelines, dimension, color }: Props) {
  const [mounted, setMounted] = useState(false);
  const [pool, setPool] = useState<ConceptWithSource[]>([]);
  const [queue, setQueue] = useState<ConceptWithSource[]>([]);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const progress = loadProgress();
    const concepts: ConceptWithSource[] = [];
    for (const g of guidelines) {
      if (!progress[progressKey(dimension, g.id)]) continue;
      const { number, name } = splitTitle(g.title);
      for (const c of g.concepts) {
        concepts.push({
          ...c,
          guidelineId: g.id,
          guidelineNumber: number,
          guidelineName: name,
        });
      }
    }
    const shuffled = shuffle(concepts);
    setPool(shuffled);
    setQueue(shuffled);
    setMounted(true);
  }, [dimension, guidelines]);

  if (!mounted) return <div className="h-64" />;

  if (pool.length === 0) {
    return (
      <div className="rounded-lg border border-stone-200 p-8 text-center bg-stone-50/40">
        <p className="text-sm text-stone-700 mb-1">Nothing to review yet</p>
        <p className="text-sm text-stone-400 mb-5">
          Mark a guideline as read to add its concepts here.
        </p>
        <Link
          href={`/${dimension}`}
          className="text-xs transition-opacity hover:opacity-70"
          style={{ color }}
        >
          Browse guidelines →
        </Link>
      </div>
    );
  }

  const masteredCount = pool.length - queue.length;
  const done = queue.length === 0;
  const current = queue[0];

  function gotIt() {
    setQueue(q => q.slice(1));
    setRevealed(false);
  }

  function showAgain() {
    setQueue(q => [...q.slice(1), q[0]]);
    setRevealed(false);
  }

  function reset() {
    setQueue(shuffle(pool));
    setRevealed(false);
  }

  if (done) {
    return (
      <div className="rounded-lg border border-stone-200 p-8 text-center bg-stone-50/40">
        <p className="text-sm text-stone-600 mb-4">
          <span style={{ color }}>✓</span> {pool.length} of {pool.length} reviewed
        </p>
        <button
          onClick={reset}
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
        >
          Review again
        </button>
      </div>
    );
  }

  return (
    <>
      <p className="text-xs text-stone-400 mb-3">
        {masteredCount} of {pool.length} got it
      </p>

      <div className="rounded-lg border border-stone-200 p-6 mb-4 bg-stone-50/40">
        <p className="text-base font-semibold text-stone-800">{current.term}</p>

        {revealed && (
          <>
            <p className="text-sm text-stone-600 leading-relaxed mt-4 pt-4 border-t border-stone-200">
              {current.definition}
            </p>
            <Link
              href={`/${dimension}/${current.guidelineId}`}
              className="inline-block text-xs mt-3 transition-opacity hover:opacity-70"
              style={{ color }}
            >
              {current.guidelineNumber
                ? `Guideline ${current.guidelineNumber} · ${current.guidelineName}`
                : current.guidelineName}{" "}
              →
            </Link>
          </>
        )}
      </div>

      {revealed ? (
        <div className="flex gap-3">
          <button
            onClick={showAgain}
            className="px-4 py-2 rounded-full text-sm font-medium border border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-700 bg-white transition-all cursor-pointer"
          >
            Show again
          </button>
          <button
            onClick={gotIt}
            className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all cursor-pointer"
            style={{ backgroundColor: color }}
          >
            Got it ✓
          </button>
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="px-4 py-2 rounded-full text-sm font-medium border border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-700 bg-white transition-all cursor-pointer"
        >
          Reveal
        </button>
      )}
    </>
  );
}
