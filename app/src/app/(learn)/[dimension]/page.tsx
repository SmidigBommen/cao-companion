import { notFound } from "next/navigation";
import Link from "next/link";
import { getDimension, dimensions } from "@/content/dimensions";
import { DIMENSION_COLORS } from "@/lib/colors";
import { GuidelineList } from "@/components/ui/GuidelineList";
import type { DimensionId } from "@/lib/types";

export function generateStaticParams() {
  return dimensions.map(d => ({ dimension: d.id }));
}

interface Props {
  params: Promise<{ dimension: string }>;
}

export default async function DimensionPage({ params }: Props) {
  const { dimension } = await params;
  const data = getDimension(dimension as DimensionId);
  if (!data) notFound();

  const color = DIMENSION_COLORS[data.id];
  const count = data.guidelines.length;

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10 pl-5 border-l-2" style={{ borderColor: color }}>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color }}
        >
          Star Model · {count} {count === 1 ? "guideline" : "guidelines"}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 mb-3">
          {data.label}
        </h1>
        <p className="text-stone-500 leading-relaxed text-[15px]">
          {data.description}
        </p>
      </div>

      <GuidelineList
        guidelines={data.guidelines}
        dimension={dimension}
        color={color}
      />

      <Link
        href={`/${dimension}/self-check`}
        className="group mt-10 flex items-center justify-between p-5 rounded-lg border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all"
      >
        <div className="flex flex-col gap-1 min-w-0">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest"
            style={{ color }}
          >
            Self-check
          </span>
          <span className="text-sm font-medium text-stone-700 group-hover:text-stone-950 transition-colors leading-snug">
            Recall the concepts from your read guidelines
          </span>
        </div>
        <span
          className="text-stone-300 group-hover:text-stone-500 transition-colors flex-shrink-0 ml-4"
        >
          →
        </span>
      </Link>

    </main>
  );
}
