"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dimensions } from "@/content/dimensions";
import type { DimensionId } from "@/lib/types";
import { DIMENSION_COLORS } from "@/lib/colors";

function MiniStar() {
  // Pentagon outline — mirrors the home star at 16×16
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <polygon
        points="9,2 15.7,6.8 13.1,14.7 4.9,14.7 2.3,6.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DimensionNav() {
  const pathname  = usePathname();
  const activeId  = pathname.split("/").filter(Boolean)[0] as DimensionId | undefined;
  const activeDim = dimensions.find(d => d.id === activeId);

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-stone-100">
      <div className="max-w-3xl mx-auto px-6 h-12 flex items-center">

        {/* Home — mini star */}
        <Link
          href="/"
          className="text-stone-400 hover:text-stone-700 transition-colors flex-shrink-0"
          aria-label="Back to Star Model"
        >
          <MiniStar />
        </Link>

        <span className="w-px h-4 bg-stone-200 mx-4 flex-shrink-0" />

        {/* Dimension tabs — scrollable on narrow viewports */}
        <div className="flex items-center gap-0.5 overflow-x-auto min-w-0">
          {dimensions.map(dim => {
            const isActive = activeId === dim.id;
            const color    = DIMENSION_COLORS[dim.id];

            return (
              <Link
                key={dim.id}
                href={`/${dim.id}`}
                className={[
                  "flex items-center gap-1.5 px-3 py-1 rounded-md text-sm whitespace-nowrap transition-colors flex-shrink-0",
                  isActive
                    ? "font-medium"
                    : "text-stone-400 hover:text-stone-600 hover:bg-stone-50",
                ].join(" ")}
                style={isActive ? { color } : undefined}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-colors flex-shrink-0"
                  style={{ backgroundColor: isActive ? color : "#d6d3d1" }}
                />
                {dim.label}
              </Link>
            );
          })}
        </div>

        {/* Guideline breadcrumb — only visible when inside a guideline */}
        {activeDim && pathname.split("/").filter(Boolean).length > 1 && (
          <>
            <span className="text-stone-300 mx-2 flex-shrink-0 text-sm">/</span>
            <span
              className="text-sm truncate min-w-0"
              style={{ color: DIMENSION_COLORS[activeDim.id] }}
            >
              {activeDim.label}
            </span>
          </>
        )}

        <div className="flex-1" />

        <span className="w-px h-4 bg-stone-200 mx-3 flex-shrink-0" />

        <Link
          href="/glossary"
          className={[
            "px-3 py-1 rounded-md text-sm whitespace-nowrap transition-colors flex-shrink-0",
            pathname === "/glossary"
              ? "font-medium text-stone-700"
              : "text-stone-400 hover:text-stone-600 hover:bg-stone-50",
          ].join(" ")}
        >
          Glossary
        </Link>

      </div>
    </nav>
  );
}
