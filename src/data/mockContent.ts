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
  { id: '3', label: 'Renewal blocker', x: 114, y: 182, width: 148, kind: 'note' },
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
    title: 'Navigation that works on mobile',
    body: 'The layout now includes a dedicated mobile menu instead of hiding primary routes below the desktop breakpoint.',
  },
  {
    title: 'Less portfolio narration, more product framing',
    body: 'The first viewport emphasizes the operator workflow and preview model instead of a generic stack of self-describing feature cards.',
  },
  {
    title: 'Accessible control language',
    body: 'Segmented controls, switches, placeholders, and form fields now have stronger focus treatment and more explicit semantics.',
  },
  {
    title: 'Shared surfaces over repeated hardcoding',
    body: 'Global surface classes and section framing reduce the amount of one-off panel styling spread across the routes.',
  },
];
