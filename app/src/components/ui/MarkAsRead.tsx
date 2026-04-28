"use client";

import { useState, useEffect } from "react";
import { loadProgress, markRead, markUnread, progressKey } from "@/lib/progress";

interface Props {
  dimension: string;
  guideline: string;
  color: string;
}

export function MarkAsRead({ dimension, guideline, color }: Props) {
  const key = progressKey(dimension, guideline);
  const [read, setRead]       = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRead(!!loadProgress()[key]);
    setMounted(true);
  }, [key]);

  // Avoid SSR/hydration mismatch — render nothing until client has loaded
  if (!mounted) return <div className="h-9" />;

  function toggle() {
    if (read) {
      markUnread(dimension, guideline);
      setRead(false);
    } else {
      markRead(dimension, guideline);
      setRead(true);
    }
  }

  return (
    <button
      onClick={toggle}
      className={[
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
        read
          ? "text-white"
          : "border border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-700 bg-white",
      ].join(" ")}
      style={read ? { backgroundColor: color, borderColor: color } : undefined}
    >
      <span className="text-base leading-none">{read ? "✓" : "○"}</span>
      <span>{read ? "Read" : "Mark as read"}</span>
    </button>
  );
}
