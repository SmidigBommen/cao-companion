import { notFound } from "next/navigation";
import Link from "next/link";
import { getDimension, dimensions } from "@/content/dimensions";
import { DIMENSION_COLORS } from "@/lib/colors";
import { DimensionSelfCheck } from "@/components/ui/DimensionSelfCheck";
import type { DimensionId } from "@/lib/types";

export function generateStaticParams() {
  return dimensions.map(d => ({ dimension: d.id }));
}

interface Props {
  params: Promise<{ dimension: string }>;
}

export default async function SelfCheckPage({ params }: Props) {
  const { dimension } = await params;
  const dim = getDimension(dimension as DimensionId);
  if (!dim) notFound();

  const color = DIMENSION_COLORS[dim.id];

  return (
    <main className="max-w-2xl mx-auto px-6 py-10 pb-20">

      <Link
        href={`/${dimension}`}
        className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors mb-10"
      >
        <span>←</span>
        <span>{dim.label}</span>
      </Link>

      <div className="mb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color }}
        >
          Self-check
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 leading-snug mb-3">
          {dim.label}
        </h1>
        <p className="text-[15px] text-stone-500 leading-relaxed">
          Recall each concept from memory before revealing the definition. Cards from guidelines you&rsquo;ve marked as read.
        </p>
      </div>

      <DimensionSelfCheck
        guidelines={dim.guidelines}
        dimension={dimension}
        color={color}
      />

    </main>
  );
}
