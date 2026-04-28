# CAO Companion — Working Principles

## What we're building
An interactive learning web app for the book *Creating Agile Organizations* (Ramos & Pavlichenko).
The Galbraith Star Model (Strategy · Structure · Process · Rewards · People) is the central hub.
Users explore each dimension's CAO guidelines, reflect, and reinforce their learning through repetition.

## Source material
- `documents/CaoBook.txt` — full book text (primary source of truth)
- `documents/OrgDesignCards-CAO-09-2024.pdf` — org design cards
- `documents/Creating Agile Organizations Guide-2025.pdf` — 2025 guide

## Tech stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (star diagram, transitions)
- **Diagrams**: draw.io (`.drawio` files committed to repo; export as SVG for display)
- **Language**: TypeScript throughout
- **Content**: Static — derived from the book, no CMS or database to start
- **AI chat**: Deferred — last feature if added at all

## Design principles
- Minimal, clean UI — best-practice UX, not design-heavy
- Learning-first: progressive reveal, not an information dump
- Repetition and reflection mechanics built in (not bolted on)
- Mobile-aware but desktop-primary (content is dense)
- No dark mode toggle to start — pick one and do it well

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
- No database to start
- No auth to start
- No AI chat to start
- Keep the dependency footprint small
