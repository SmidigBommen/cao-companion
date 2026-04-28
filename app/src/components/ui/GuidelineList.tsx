"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { splitTitle } from "@/lib/utils";
import { loadProgress, progressKey, type ProgressStore } from "@/lib/progress";
import type { Guideline } from "@/lib/types";

interface Props {
  guidelines: Guideline[];
  dimension: string;
  color: string;
}

export function GuidelineList({ guidelines, dimension, color }: Props) {
  const [progress, setProgress] = useState<ProgressStore>({});

  useEffect(() => {
    setProgress(loadProgress());

    // Keep in sync if another tab updates localStorage
    function onStorage(e: StorageEvent) {
      if (e.key === "cao:read") setProgress(loadProgress());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const readCount = guidelines.filter(
    g => progress[progressKey(dimension, g.id)]
  ).length;
  const total = guidelines.length;
  const allDone = readCount === total;

  return (
    <div>
      {/* Progress bar — only shown once at least one guideline is read */}
      <div className={["mb-6 transition-opacity", readCount > 0 ? "opacity-100" : "opacity-0"].join(" ")}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-stone-400">
            {readCount} of {total} read
          </span>
          {allDone && (
            <span className="text-xs font-semibold" style={{ color }}>
              Complete ✓
            </span>
          )}
        </div>
        <div className="h-0.5 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(readCount / total) * 100}%`,
              backgroundColor: color,
            }}
          />
        </div>
      </div>

      {/* Cards */}
      <ol className="space-y-2">
        {guidelines.map(g => {
          const { number, name } = splitTitle(g.title);
          const isRead = !!progress[progressKey(dimension, g.id)];

          return (
            <li key={g.id}>
              <Link
                href={`/${dimension}/${g.id}`}
                className={[
                  "group flex items-start gap-4 px-5 py-4 rounded-lg border transition-all",
                  isRead
                    ? "border-stone-100 bg-stone-50/60 hover:border-stone-200 hover:bg-stone-50"
                    : "border-stone-100 bg-white hover:border-stone-300 hover:shadow-sm",
                ].join(" ")}
              >
                {/* Number */}
                {number ? (
                  <span
                    className="text-xs font-semibold tabular-nums pt-0.5 w-5 text-right flex-shrink-0"
                    style={{ color, opacity: isRead ? 0.5 : 0.35 }}
                  >
                    {number.padStart(2, "0")}
                  </span>
                ) : (
                  <span className="w-5 flex-shrink-0" />
                )}

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={[
                      "font-medium leading-snug transition-colors",
                      isRead
                        ? "text-stone-400 group-hover:text-stone-600"
                        : "text-stone-800 group-hover:text-stone-950",
                    ].join(" ")}
                  >
                    {name}
                  </p>
                  <p className="text-sm text-stone-400 mt-1.5 leading-relaxed line-clamp-2">
                    {g.summary}
                  </p>
                </div>

                {/* Status indicator */}
                <span className="flex-shrink-0 pt-0.5 text-sm transition-colors">
                  {isRead ? (
                    <span style={{ color }} className="opacity-70">✓</span>
                  ) : (
                    <span className="text-stone-300 group-hover:text-stone-500">→</span>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
