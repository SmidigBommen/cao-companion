import { notFound } from "next/navigation";
import Link from "next/link";
import { getDimension, dimensions } from "@/content/dimensions";
import { DIMENSION_COLORS } from "@/lib/colors";
import { splitTitle } from "@/lib/utils";
import { MarkAsRead } from "@/components/ui/MarkAsRead";
import type { DimensionId } from "@/lib/types";

export function generateStaticParams() {
  return dimensions.flatMap(d =>
    d.guidelines.map(g => ({ dimension: d.id, guideline: g.id }))
  );
}

interface Props {
  params: Promise<{ dimension: string; guideline: string }>;
}

export default async function GuidelinePage({ params }: Props) {
  const { dimension, guideline } = await params;
  const dim = getDimension(dimension as DimensionId);
  if (!dim) notFound();

  const index = dim.guidelines.findIndex(g => g.id === guideline);
  if (index === -1) notFound();

  const data = dim.guidelines[index];
  const prev = index > 0 ? dim.guidelines[index - 1] : null;
  const next = index < dim.guidelines.length - 1 ? dim.guidelines[index + 1] : null;

  const color = DIMENSION_COLORS[dim.id];
  const { number, name } = splitTitle(data.title);

  return (
    <main className="max-w-2xl mx-auto px-6 py-10 pb-20">

      {/* Back */}
      <Link
        href={`/${dimension}`}
        className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors mb-10"
      >
        <span>←</span>
        <span>{dim.label}</span>
      </Link>

      {/* Title block */}
      <div className="mb-10">
        {number && (
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color }}
          >
            Guideline {number}
          </p>
        )}
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 leading-snug mb-3">
          {name}
        </h1>
        {data.bookChapter && (
          <p className="text-xs text-stone-400">{data.bookChapter}</p>
        )}
      </div>

      {/* Summary — lead text */}
      <p className="text-[15px] text-stone-600 leading-relaxed mb-12 pb-12 border-b border-stone-100">
        {data.summary}
      </p>

      {/* Why it matters */}
      <section className="mb-10">
        <h2
          className="text-[10px] font-semibold uppercase tracking-widest mb-4"
          style={{ color }}
        >
          Why it matters
        </h2>
        <p className="text-[15px] text-stone-700 leading-relaxed">
          {data.why}
        </p>
      </section>

      {/* Anti-pattern */}
      <section className="mb-10 pt-10 border-t border-stone-100">
        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-amber-600 mb-4">
          What goes wrong without it
        </h2>
        <p className="text-[15px] text-stone-600 leading-relaxed pl-4 border-l-2 border-amber-200">
          {data.antiPattern}
        </p>
      </section>

      {/* Key concepts */}
      {data.concepts.length > 0 && (
        <section className="mb-10 pt-10 border-t border-stone-100">
          <h2 className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-6">
            Key concepts
          </h2>
          <dl className="space-y-0">
            {data.concepts.map((c, i) => (
              <div
                key={c.term}
                className={[
                  "py-4",
                  i < data.concepts.length - 1 ? "border-b border-stone-100" : "",
                ].join(" ")}
              >
                <dt className="text-sm font-semibold text-stone-800 mb-1">
                  {c.term}
                </dt>
                <dd className="text-sm text-stone-500 leading-relaxed">
                  {c.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Mark as read */}
      <div className="pt-10 border-t border-stone-100 flex items-center justify-between">
        <MarkAsRead
          dimension={dimension}
          guideline={guideline}
          color={color}
        />
        {(prev || next) && (
          <span className="text-xs text-stone-400">
            {index + 1} / {dim.guidelines.length}
          </span>
        )}
      </div>

      {/* Prev / Next */}
      {(prev || next) && (
        <nav className="pt-10 border-t border-stone-100 flex items-stretch gap-4">
          {prev ? (
            <Link
              href={`/${dimension}/${prev.id}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <span className="text-xs text-stone-400 group-hover:text-stone-500 transition-colors">
                ← Previous
              </span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900 transition-colors leading-snug">
                {splitTitle(prev.title).name}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/${dimension}/${next.id}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all text-right"
            >
              <span className="text-xs text-stone-400 group-hover:text-stone-500 transition-colors">
                Next →
              </span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900 transition-colors leading-snug">
                {splitTitle(next.title).name}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </nav>
      )}

    </main>
  );
}
