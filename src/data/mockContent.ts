import type { OverlayItem, WidgetConfig } from '../lib/types';

export const defaultWidgetConfig: WidgetConfig = {
  brandColor: '#7b5cff',
  greeting: 'Hi! I can summarize account health, explain product signals, and cite the source behind each answer.',
  tone: 'professional',
  showSources: true,
  compactMode: false,
};

export const overlaySeed: OverlayItem[] = [
  { id: '1', label: 'Expansion +18%', x: 16, y: 24, width: 124, kind: 'metric' },
  { id: '2', label: 'Protected note zone', x: 244, y: 66, width: 166, kind: 'chip' },
  { id: '3', label: 'Renewal blocker', x: 118, y: 220, width: 148, kind: 'note' },
];

export const chatMessages = [
  {
    role: 'assistant',
    text: 'I can explain account movement, summarize support context, and point to the product or policy source behind each answer.',
  },
  {
    role: 'user',
    text: 'What makes this feel like a believable enterprise AI widget?',
  },
  {
    role: 'assistant',
    text: 'The controls stay operator-friendly, the host canvas keeps product context visible, and the chat demonstrates trust with explicit citations.',
  },
];

export const featureCards = [
  {
    title: 'A hero that tells the product story immediately',
    body: 'The first screen now sells the embedded AI workflow with stronger hierarchy, denser proof, and a dashboard-style visual language.',
  },
  {
    title: 'Premium dark-system styling with one shared logic',
    body: 'Panels, edge-lighting, spacing, and token behavior now align across the app instead of drifting route by route.',
  },
  {
    title: 'A widget that feels deployable, not ornamental',
    body: 'The control rail, host canvas, and assistant stream now read like parts of one embedded product experience.',
  },
  {
    title: 'Clearer proof of UX maturity and frontend craft',
    body: 'Mobile navigation, accessible controls, responsive layout rhythm, and interaction clarity all reinforce the demo as a serious portfolio piece.',
  },
];
