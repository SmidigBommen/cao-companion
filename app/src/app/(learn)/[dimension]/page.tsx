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
        className="group mt-10 flex items-center justify-between gap-4 p-6 rounded-xl border-2 transition-all hover:shadow-md"
        style={{
          borderColor: `${color}40`,
          backgroundColor: `${color}0d`,
        }}
      >
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 text-xl font-semibold"
          style={{ backgroundColor: color, color: "white" }}
          aria-hidden
        >
          ?
        </div>
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <span
            className="text-[11px] font-semibold uppercase tracking-widest"
            style={{ color }}
          >
            Self-check
          </span>
          <span className="text-base font-semibold text-stone-900 leading-snug">
            Recall the concepts from your read guidelines
          </span>
        </div>
        <span
          className="text-lg flex-shrink-0 transition-transform group-hover:translate-x-1"
          style={{ color }}
        >
          →
        </span>
      </Link>

    </main>
  );
}
