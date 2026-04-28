# CAO Companion

An interactive learning app for *Creating Agile Organizations* by Ramos & Pavlichenko.

Explore the 12 CAO guidelines through Galbraith's Star Model — Strategy, Structure, Processes, Rewards, and People — with progress tracking and key concept definitions.

## Features

- Interactive star model with animated dimension navigation
- Per-dimension guideline pages with summaries, context, and anti-patterns
- Key concepts per guideline
- Mark-as-read progress tracking (localStorage, no account needed)
- Concept glossary *(in progress)*

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://www.framer.com/motion/) 12
- TypeScript

## Getting started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/               Next.js application
  src/
    app/           Routes (App Router)
      (learn)/     Shared nav layout
        [dimension]/          Dimension page
        [dimension]/[guideline]/  Guideline page
    components/
      star/        Star model SVG component
      nav/         DimensionNav top bar
      ui/          GuidelineList, MarkAsRead, GlossaryView
    content/       Static content (guidelines + concepts)
    lib/           Types, colors, progress, utils
diagrams/          draw.io architecture diagrams
documents/         Source material (gitignored)
```

## Source material

Based on the official CAO org design cards and the full book text (not committed to this repo).
