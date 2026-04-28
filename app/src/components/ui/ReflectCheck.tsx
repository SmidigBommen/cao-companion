"use client";

import { useState } from "react";
import type { Concept } from "@/lib/types";

interface Props {
  concepts: Concept[];
  color: string;
}

export function ReflectCheck({ concepts, color }: Props) {
  const [queue, setQueue] = useState<Concept[]>(concepts);
  const [revealed, setRevealed] = useState(false);

  if (concepts.length === 0) return null;

  const masteredCount = concepts.length - queue.length;
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
    setQueue(concepts);
    setRevealed(false);
  }

  return (
    <section className="mb-10 pt-10 border-t border-stone-100">
      <h2
        className="text-[10px] font-semibold uppercase tracking-widest mb-6"
        style={{ color }}
      >
        Self-check
      </h2>

      {done ? (
        <div className="rounded-lg border border-stone-200 p-8 text-center bg-stone-50/40">
          <p className="text-sm text-stone-600 mb-4">
            <span style={{ color }}>✓</span> {concepts.length} of {concepts.length} reviewed
          </p>
          <button
            onClick={reset}
            className="text-xs text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
          >
            Review again
          </button>
        </div>
      ) : (
        <>
          <p className="text-xs text-stone-400 mb-3">
            {masteredCount} of {concepts.length} got it
          </p>

          <div className="rounded-lg border border-stone-200 p-6 mb-4 bg-stone-50/40">
            <p className="text-base font-semibold text-stone-800">
              {current.term}
            </p>

            {revealed && (
              <p className="text-sm text-stone-600 leading-relaxed mt-4 pt-4 border-t border-stone-200">
                {current.definition}
              </p>
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
      )}
    </section>
  );
}
