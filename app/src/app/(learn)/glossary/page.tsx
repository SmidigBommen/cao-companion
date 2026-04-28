import { getAllConcepts } from "@/lib/concepts";
import { GlossaryView } from "@/components/ui/GlossaryView";

export default function GlossaryPage() {
  const concepts = getAllConcepts();

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
          {concepts.length} terms
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
          Glossary
        </h1>
      </div>

      <GlossaryView concepts={concepts} />
    </main>
  );
}
