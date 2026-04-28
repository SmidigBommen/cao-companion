# CAO Companion — Working Principles

## What we're building
An interactive learning web app for the book *Creating Agile Organizations* (Ramos & Pavlichenko).
The Galbraith Star Model (Strategy · Structure · Process · Rewards · People) is the central hub.
Users explore each dimension's 12 CAO guidelines (Chapter 4), reflect, and reinforce learning through repetition.

**Repo**: https://github.com/SmidigBommen/cao-companion

## Source material
Stored locally in `documents/` (gitignored — not committed to the repo):
- `documents/CaoBook.txt` — full book text (primary source of truth)
- `documents/OrgDesignCards-CAO-09-2024.pdf` — org design cards (defines the 12 official guidelines)
- `documents/Creating Agile Organizations Guide-2025.pdf` — 2025 guide

## What's been built
- **Star Model** — animated SVG pentagon (Framer Motion), clickable vertices, description panel
- **Dimension pages** — guideline list with localStorage progress tracking per dimension
- **Guideline pages** — full learning layout: summary, why it matters, anti-pattern, key concepts, prev/next nav
- **DimensionNav** — top nav bar with dimension tabs + Glossary link + breadcrumb on guideline pages
- **Mark as read** — per-guideline toggle, persisted to localStorage (`cao:read`)
- **Glossary** (`/glossary`) — searchable, alphabetical, each concept links back to source guideline (33 concepts)
- **Content** — 12 guidelines across 5 dimensions, extracted from the book
- **Deployment** — static export to GitHub Pages via Actions workflow on push to master

## What's next
- Reflection mechanics (spaced repetition, quizzes)
- AI chat (last, if at all)

## Tech stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (CSS-based config, `@theme inline` in globals.css — no tailwind.config.ts)
- **Animation**: Framer Motion 12 (star diagram, transitions)
- **Diagrams**: draw.io (`.drawio` files in `diagrams/`; export as SVG for display)
- **Language**: TypeScript throughout
- **Content**: Static TypeScript files in `src/content/` — no CMS or database

## Key conventions
- `src/lib/colors.ts` — single source of truth for dimension colors (`DIMENSION_COLORS`)
- `src/lib/types.ts` — all shared types (`DimensionId`, `Guideline`, `Concept`, `Dimension`)
- `src/lib/progress.ts` — localStorage progress helpers (`markRead`, `markUnread`, `progressKey`)
- `src/lib/utils.ts` — `splitTitle()` parses "Guideline N: Title" format
- `(learn)` route group — shared `DimensionNav` layout for all learning pages
- G12 appears in both Rewards (valuation lens) and People (development lens) — intentional

## Code conventions
- No comments unless the WHY is non-obvious
- No premature abstractions — three similar lines beats a helper
- Validate only at system boundaries; trust internal logic
- No placeholder/stub implementations — finish each piece before moving on
- Prefer editing existing files over creating new ones

## Diagrams
All architecture and flow diagrams use draw.io.
Files live in `diagrams/` as `.drawio` source + exported `.svg`.
Never use Mermaid or PlantUML — draw.io only.

## Constraints
- No database
- No auth
- No AI chat (deferred — last feature if added at all)
- Keep the dependency footprint small
