# Orbit Assist Demo

I built this project as a portfolio piece to show how I approach modern SaaS frontend work when the goal is not just to make something look polished, but to make it feel usable, production-minded, and easy to extend.

Orbit Assist is a frontend concept for an embedded AI support experience inside a B2B product surface. I use it to demonstrate the kind of work I want to be hired for: thoughtful UI architecture, interaction design, accessibility, design-system discipline, and product interfaces that feel believable rather than purely decorative.

## What I Wanted This Project To Demonstrate

I designed this repo to show that I can:

- build React and TypeScript interfaces with clear component structure
- create polished UI systems with Tailwind CSS and Framer Motion
- design product-led landing and application surfaces, not just marketing pages
- turn a visual concept into reusable sections, tokens, and interaction patterns
- handle AI-adjacent UX details like trust cues, source visibility, and operator controls
- think about accessibility, responsive behavior, and motion in a practical way

## Why I Made It

I wanted a project that communicates my skills from the perspective of an owner, not just a contractor completing a checklist.

Instead of building a generic demo, I focused on a realistic scenario: a non-technical team configuring an embedded assistant inside an existing product. That let me show the decisions I care about most:

- strong information hierarchy
- configuration and preview living in the same workflow
- reusable layout and surface primitives
- motion used for hierarchy and feedback, not noise
- accessibility that is part of the design, not added at the end

## Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Playwright for visual regression coverage

## Routes I Use To Present The Project

- `/` for the overall product story and design direction
- `/playground` for the strongest interaction and configuration flow
- `/design-system` for the token, surface, and handoff angle

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:4177`.

## Validation

```bash
npm run typecheck
npm run build
npm run test:visual
```

## Project Structure

```text
src/
  components/
    widget/
      AssistantPreviewPanel.tsx
      HostCanvasPreview.tsx
      WidgetControlPanel.tsx
      WidgetSummaryPanels.tsx
      constants.ts
    AppShell.tsx
    DesignTokenPanel.tsx
    FeatureCardGrid.tsx
    PageSection.tsx
    SectionHeading.tsx
    WidgetSimulator.tsx
  data/
    mockContent.ts
  lib/
    designTokens.ts
    types.ts
  pages/
    DesignSystemPage.tsx
    HomePage.tsx
    PlaygroundPage.tsx
scripts/
  run-vite.mjs
tests/
  visual/
```

## Notes

This is intentionally a frontend-only demonstration project. It does not connect to a live backend or LLM service.

The point of the repo is to show how I think as a frontend owner: how I structure UI, how I shape product flows, how I make interfaces feel credible, and how I support those decisions with maintainable code.
