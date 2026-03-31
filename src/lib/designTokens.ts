export const colorTokens = [
  { name: 'Brand / Primary', value: '#5b6cf8', use: 'CTA, focus, motion accent' },
  { name: 'Accent / Mint', value: '#6ee7d2', use: 'Selection, insights, trust cues' },
  { name: 'Glow / Blush', value: '#f3a6d7', use: 'Atmosphere, highlight gradients' },
  { name: 'Canvas / 950', value: '#061018', use: 'App shell and deep background' },
  { name: 'Text / 50', value: '#f8fafc', use: 'Readable surface contrast' },
];

export const spacingTokens = [
  { name: 'Space / 2', value: '8px' },
  { name: 'Space / 3', value: '12px' },
  { name: 'Space / 4', value: '16px' },
  { name: 'Space / 6', value: '24px' },
  { name: 'Space / 8', value: '32px' },
  { name: 'Radius / xl', value: '16px' },
  { name: 'Radius / 2xl', value: '24px' },
];

export const figmaNotes = [
  'Shared section framing reduces repeated max-width and spacing decisions across routes.',
  'Surface styles now come from reusable classes instead of being re-authored panel by panel.',
  'The widget preview avoids nested editable controls, which makes the interaction model cleaner to hand off.',
  'Navigation and focus treatments are part of the system rather than one-off accessibility patches.',
];
