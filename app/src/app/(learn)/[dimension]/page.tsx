import { notFound } from "next/navigation";
import { getDimension } from "@/content/dimensions";
import { DIMENSION_COLORS } from "@/lib/colors";
import { GuidelineList } from "@/components/ui/GuidelineList";
import type { DimensionId } from "@/lib/types";

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

    </main>
  );
}
