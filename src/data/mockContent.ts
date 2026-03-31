import type { OverlayItem, WidgetConfig } from '../lib/types';

export const defaultWidgetConfig: WidgetConfig = {
  brandColor: '#5b6cf8',
  greeting: 'Hi! I can help summarize customer feedback or explain any dashboard metric.',
  tone: 'professional',
  showSources: true,
  compactMode: false,
};

export const overlaySeed: OverlayItem[] = [
  { id: '1', label: 'ARR +18%', x: 16, y: 24, width: 112, kind: 'metric' },
  { id: '2', label: 'Redaction zone', x: 220, y: 64, width: 148, kind: 'chip' },
  { id: '3', label: 'Edit in place', x: 114, y: 182, width: 132, kind: 'note' },
];

export const chatMessages = [
  {
    role: 'assistant',
    text: 'I can answer product questions, summarize notes, and guide non-technical teams through setup.',
  },
  {
    role: 'user',
    text: 'What patterns here show good B2B SaaS UX?',
  },
  {
    role: 'assistant',
    text: 'Clear information hierarchy, progressive disclosure, configuration previews, and low-friction actions with strong defaults.',
  },
];

export const featureCards = [
  {
    title: 'Embeddable widget UX',
    body: 'Preview the support assistant in a host app frame and export a copy-paste embed snippet.',
  },
  {
    title: 'Motion with purpose',
    body: 'Use Framer Motion for hierarchy, feedback, and layout transitions rather than decoration only.',
  },
  {
    title: 'Accessible by default',
    body: 'Visible focus states, semantic labels, keyboard-friendly controls, and reduced-motion support.',
  },
  {
    title: 'Figma-friendly structure',
    body: 'Token-driven styling and simple component composition keep handoff and iteration fast.',
  },
];
