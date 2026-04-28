import { StarModel } from "@/components/star/StarModel";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
      <div className="mb-12 text-center">
        <p className="text-[10px] text-stone-400 mb-3 tracking-[0.3em] uppercase">
          A companion to
        </p>
        <h1 className="text-4xl md:text-5xl font-medium italic tracking-tight text-stone-900 leading-tight">
          Creating Agile Organizations
        </h1>
        <p className="text-xs text-stone-400 mt-4 tracking-[0.25em] uppercase">
          The Star Model
        </p>
      </div>
      <StarModel />
    </main>
  );
}
