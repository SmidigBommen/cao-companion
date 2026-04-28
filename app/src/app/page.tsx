import { StarModel } from "@/components/star/StarModel";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-stone-900">
          Creating Agile Organizations
        </h1>
        <p className="text-xs text-stone-400 mt-1.5 tracking-widest uppercase">
          The Star Model
        </p>
      </div>
      <StarModel />
    </main>
  );
}
