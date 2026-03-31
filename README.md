# Orbit Assist Demo

A portfolio-grade frontend demo built to showcase:

- React + TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Figma-to-code friendly structure
- Embeddable widget UX
- AI/LLM interaction patterns
- Accessibility-minded SaaS UI

## Why this project exists

This repo is designed as a **sharper portfolio example** for UI-heavy SaaS frontend roles. It focuses on the sort of work often requested in modern B2B product contracts:

- polished landing + product sections
- live configuration panels
- embeddable support/widget patterns
- motion-driven interactions that feel intentional
- draggable inline-editable elements
- privacy-sensitive AI workflow hints like image redaction

## Run locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:4177
```

## Build

```bash
npm run build
```

## Project structure

```text
src/
  components/
    AppShell.tsx
    DesignTokenPanel.tsx
    FeatureCardGrid.tsx
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
```

## Best route to show clients

- `/` for the overall case-study style walkthrough
- `/playground` for the strongest interaction demo
- `/design-system` for the Figma / design-system angle

## Portfolio positioning

Use this project to say:

> I build polished SaaS frontends for non-technical users, with strong attention to component systems, accessibility, embeddable AI experiences, and motion-led interaction design.

## Notes

This is a demo concept and does not connect to a backend or live LLM API. The goal is **frontend skill demonstration** and **portfolio credibility**.
