import type { RedactionStyle, WidgetTone } from '../../lib/types';

export const hostCards = [
  { title: 'Expansion pipeline', value: '$184K', badge: '+18%' },
  { title: 'Teams with live widget', value: '1,284', badge: '+9%' },
  { title: 'Median assist response', value: '36 sec', badge: '-14%' },
];

export const toneOptions: WidgetTone[] = ['professional', 'friendly', 'proactive'];
export const redactionOptions: RedactionStyle[] = ['blur', 'pixel', 'blackout'];

export const inputClassName =
  'focus-ring w-full rounded-2xl border border-white/10 bg-[#070911] px-4 py-3 text-sm text-white placeholder:text-slate-500';
