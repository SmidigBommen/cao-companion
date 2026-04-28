"use client";

import { useState } from "react";
import Link from "next/link";
import { DIMENSION_COLORS } from "@/lib/colors";
import type { ConceptEntry } from "@/lib/concepts";

interface Props {
  concepts: ConceptEntry[];
}

export function GlossaryView({ concepts }: Props) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = q
    ? concepts.filter(
        c =>
          c.term.toLowerCase().includes(q) ||
          c.definition.toLowerCase().includes(q)
      )
    : concepts;

  const grouped: { letter: string; entries: ConceptEntry[] }[] = [];
  if (!q) {
    for (const entry of filtered) {
      const letter = entry.term[0].toUpperCase();
      const last = grouped[grouped.length - 1];
      if (last?.letter === letter) {
        last.entries.push(entry);
      } else {
        grouped.push({ letter, entries: [entry] });
      }
    }
  }

  return (
    <div>
      <div className="mb-10">
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search terms and definitions…"
          className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 bg-white"
        />
      </div>

      {q ? (
        filtered.length === 0 ? (
          <p className="text-sm text-stone-400">No matches for &ldquo;{query}&rdquo;.</p>
        ) : (
          <dl>
            {filtered.map(entry => (
              <ConceptCard key={`${entry.dimensionId}/${entry.term}`} entry={entry} />
            ))}
          </dl>
        )
      ) : (
        grouped.map(({ letter, entries }) => (
          <div key={letter} className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-300 mb-3">
              {letter}
            </h2>
            <dl>
              {entries.map(entry => (
                <ConceptCard key={`${entry.dimensionId}/${entry.term}`} entry={entry} />
              ))}
            </dl>
          </div>
        ))
      )}
    </div>
  );
}

function ConceptCard({ entry }: { entry: ConceptEntry }) {
  const color = DIMENSION_COLORS[entry.dimensionId];

  return (
    <div className="py-4 border-b border-stone-100 last:border-0">
      <dt className="text-sm font-semibold text-stone-800 mb-1">{entry.term}</dt>
      <dd className="text-sm text-stone-500 leading-relaxed mb-2.5">
        {entry.definition}
      </dd>
      <Link
        href={`/${entry.dimensionId}/${entry.guidelineId}`}
        className="inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-70"
        style={{ color }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: color }}
        />
        {entry.guidelineNumber ? `Guideline ${entry.guidelineNumber}` : entry.guidelineName}
        <span className="text-stone-300">·</span>
        {entry.dimensionLabel}
      </Link>
    </div>
  );
}
