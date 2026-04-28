import { DimensionNav } from "@/components/nav/DimensionNav";

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1">
      <DimensionNav />
      {children}
    </div>
  );
}
