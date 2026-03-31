import { useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { defaultWidgetConfig, overlaySeed } from '../data/mockContent';
import type { OverlayItem, RedactionStyle, WidgetConfig } from '../lib/types';
import { AssistantPreviewPanel } from './widget/AssistantPreviewPanel';
import { HostCanvasPreview } from './widget/HostCanvasPreview';
import { WidgetControlPanel } from './widget/WidgetControlPanel';
import { WidgetSummaryPanels } from './widget/WidgetSummaryPanels';

function updateOverlayItem(items: OverlayItem[], itemId: string, nextLabel: string) {
  return items.map((item) => (item.id === itemId ? { ...item, label: nextLabel } : item));
}

export function WidgetSimulator({ expanded = false }: { expanded?: boolean }) {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [config, setConfig] = useState<WidgetConfig>(defaultWidgetConfig);
  const [redactionStyle, setRedactionStyle] = useState<RedactionStyle>('pixel');
  const [overlayItems, setOverlayItems] = useState<OverlayItem[]>(overlaySeed);
  const [selectedOverlayId, setSelectedOverlayId] = useState<string>(overlaySeed[0]?.id ?? '');
  const reduceMotion = useReducedMotion();

  const selectedOverlay = useMemo(
    () => overlayItems.find((item) => item.id === selectedOverlayId) ?? overlayItems[0],
    [overlayItems, selectedOverlayId],
  );

  const embedCode = useMemo(
    () => `<script\n  src="https://cdn.orbitassist.dev/widget.js"\n  data-brand="${config.brandColor}"\n  data-greeting="${config.greeting}"\n  data-tone="${config.tone}"\n></script>`,
    [config.brandColor, config.greeting, config.tone],
  );

  return (
    <div className={`grid gap-6 ${expanded ? 'xl:grid-cols-[360px_minmax(0,1fr)]' : 'lg:grid-cols-[340px_minmax(0,1fr)]'}`}>
      <WidgetControlPanel
        config={config}
        isChatOpen={isChatOpen}
        overlayItems={overlayItems}
        redactionStyle={redactionStyle}
        selectedOverlay={selectedOverlay}
        onToggleChat={() => setIsChatOpen((value) => !value)}
        onConfigChange={setConfig}
        onRedactionStyleChange={setRedactionStyle}
        onOverlaySelect={setSelectedOverlayId}
        onOverlayLabelChange={(label) => {
          if (!selectedOverlay) {
            return;
          }
          setOverlayItems((current) => updateOverlayItem(current, selectedOverlay.id, label));
        }}
      />

      <section className="space-y-5">
        <div className="surface-panel-strong relative overflow-hidden rounded-[32px] p-6">
          <div className="absolute inset-0 panel-grid bg-grid opacity-20" aria-hidden="true" />
          <div className="relative grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
            <HostCanvasPreview
              overlayItems={overlayItems}
              redactionStyle={redactionStyle}
              reduceMotion={Boolean(reduceMotion)}
              selectedOverlayId={selectedOverlay?.id}
              onOverlaySelect={setSelectedOverlayId}
            />
            <AssistantPreviewPanel config={config} isOpen={isChatOpen} reduceMotion={Boolean(reduceMotion)} />
          </div>
        </div>

        <WidgetSummaryPanels embedCode={embedCode} />
      </section>
    </div>
  );
}
