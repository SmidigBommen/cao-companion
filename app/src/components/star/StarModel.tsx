"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { dimensions } from "@/content/dimensions";
import type { DimensionId } from "@/lib/types";
import { DIMENSION_COLORS } from "@/lib/colors";

// ── Geometry ──────────────────────────────────────────────────────────────────

const CX = 250;
const CY = 248;
const VERTEX_R = 140;
const LABEL_R = 178;

const POINTS: {
  id: DimensionId;
  angle: number;
  anchor: "start" | "middle" | "end";
  lx: number;
  ly: number;
}[] = [
  { id: "strategy",  angle: 90,   anchor: "middle", lx: 0,   ly: -18 },
  { id: "structure", angle: 18,   anchor: "start",  lx: 18,  ly: 0   },
  { id: "processes", angle: -54,  anchor: "start",  lx: 18,  ly: 0   },
  { id: "rewards",   angle: -126, anchor: "end",    lx: -18, ly: 0   },
  { id: "people",    angle: 162,  anchor: "end",    lx: -18, ly: 0   },
];

const COLOR: Record<DimensionId, string> = {
  strategy:  "#2563eb",
  structure: "#0891b2",
  processes: "#059669",
  rewards:   "#d97706",
  people:    "#7c3aed",
};

function polar(deg: number, r: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY - r * Math.sin(rad) };
}

const VERTS = POINTS.map(p => ({ ...p, ...polar(p.angle, VERTEX_R) }));
const LBLS  = POINTS.map(p => polar(p.angle, LABEL_R));

// All C(5,2) = 10 edges of the complete graph
const EDGES: [number, number][] = [];
for (let i = 0; i < 5; i++)
  for (let j = i + 1; j < 5; j++)
    EDGES.push([i, j]);

// ── Component ─────────────────────────────────────────────────────────────────

export function StarModel() {
  const [active, setActive] = useState<DimensionId | null>(null);
  const router = useRouter();
  const activeDim = dimensions.find(d => d.id === active) ?? null;

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 500 480"
        className="w-full max-w-[880px]"
        aria-label="CAO Star Model — click a dimension to explore"
      >
        {/* ── Edges ── */}
        {EDGES.map(([i, j]) => {
          const lit =
            active !== null &&
            (VERTS[i].id === active || VERTS[j].id === active);

          return (
            <motion.line
              key={`e${i}${j}`}
              x1={VERTS[i].x} y1={VERTS[i].y}
              x2={VERTS[j].x} y2={VERTS[j].y}
              animate={{
                stroke:      lit ? DIMENSION_COLORS[active!] : "#d6d3d1",
                strokeWidth: lit ? 1.5 : 0.75,
                opacity:     active !== null && !lit ? 0.25 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          );
        })}

        {/* ── Vertices ── */}
        {VERTS.map((v, i) => {
          const lp  = LBLS[i];
          const on  = active === v.id;
          const c   = DIMENSION_COLORS[v.id];
          const dim = dimensions.find(d => d.id === v.id)!;

          return (
            <g
              key={v.id}
              className="cursor-pointer"
              onMouseEnter={() => setActive(v.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => router.push(`/${v.id}`)}
            >
              {/* Invisible hit area — large enough to catch the label too */}
              <circle cx={v.x} cy={v.y} r={46} fill="transparent" />

              {/* Soft glow */}
              <motion.circle
                cx={v.x} cy={v.y}
                fill={c}
                animate={{ r: on ? 24 : 0, opacity: on ? 0.1 : 0 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
              />

              {/* Dot */}
              <motion.circle
                cx={v.x} cy={v.y}
                animate={{
                  r:           on ? 14 : 8,
                  fill:        on ? c  : "#ffffff",
                  stroke:      on ? c  : "#a8a29e",
                  strokeWidth: on ? 0  : 1.5,
                }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
              />

              {/* Label */}
              <text
                x={lp.x + v.lx}
                y={lp.y + v.ly}
                textAnchor={v.anchor}
                dominantBaseline="central"
                fontSize={13}
                className="pointer-events-none"
                style={{
                  fill:       on ? c : "#78716c",
                  fontWeight: on ? 600 : 400,
                  fontFamily: "inherit",
                  transition: "fill 0.15s",
                }}
              >
                {dim.label}
              </text>

              {/* Guideline count — only when hovered */}
              {on && (
                <motion.text
                  x={lp.x + v.lx}
                  y={lp.y + v.ly + 18}
                  textAnchor={v.anchor}
                  dominantBaseline="central"
                  fontSize={10}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none"
                  style={{ fill: c, fontFamily: "inherit" }}
                >
                  {dim.guidelines.length}{" "}
                  {dim.guidelines.length === 1 ? "guideline" : "guidelines"}
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Dimension description — fades in on hover */}
      <div className="mt-1 h-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          {activeDim && (
            <motion.p
              key={activeDim.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="text-xs text-stone-400 text-center leading-relaxed"
            >
              {activeDim.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
