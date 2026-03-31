export type WidgetTone = 'professional' | 'friendly' | 'proactive';
export type RedactionStyle = 'blur' | 'pixel' | 'blackout';

export type WidgetConfig = {
  brandColor: string;
  greeting: string;
  tone: WidgetTone;
  showSources: boolean;
  compactMode: boolean;
};

export type OverlayItem = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  kind: 'chip' | 'note' | 'metric';
};
