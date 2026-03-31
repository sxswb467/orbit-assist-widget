# Orbit Assist — Figma handoff notes

This demo is intentionally structured to look like a small production frontend built from finalized design work.

## What it demonstrates

- **Token-driven styling** with a predictable set of color and spacing decisions.
- **Flat component structure** so an engineer or AI coding assistant can update sections without tracing deep abstractions.
- **Section primitives and repeated layout rules** that are easy to map from Figma frames.
- **Motion constraints** that support hierarchy and feedback while respecting reduced-motion preferences.
- **Accessibility-minded defaults** such as visible focus rings, semantic labels, and strong contrast.

## Suggested portfolio framing

When showing this project publicly, describe it as:

> A frontend concept for an AI-enabled B2B SaaS product. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The demo focuses on embeddable widget UX, non-technical SaaS users, Figma-to-code structure, and accessible motion-driven interactions.

## Files to highlight

- `src/components/WidgetSimulator.tsx` — strongest proof of interaction design skill
- `src/components/DesignTokenPanel.tsx` — strongest proof of design system thinking
- `src/pages/HomePage.tsx` — strongest proof of marketing/product page composition
- `src/lib/designTokens.ts` — strongest proof of Figma handoff discipline
