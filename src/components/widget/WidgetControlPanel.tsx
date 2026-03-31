import type { OverlayItem, RedactionStyle, WidgetConfig } from '../../lib/types';
import { inputClassName, redactionOptions, toneOptions } from './constants';

type WidgetControlPanelProps = {
  config: WidgetConfig;
  isChatOpen: boolean;
  overlayItems: OverlayItem[];
  redactionStyle: RedactionStyle;
  selectedOverlay?: OverlayItem;
  onToggleChat: () => void;
  onConfigChange: (nextConfig: WidgetConfig) => void;
  onRedactionStyleChange: (style: RedactionStyle) => void;
  onOverlaySelect: (overlayId: string) => void;
  onOverlayLabelChange: (label: string) => void;
};

export function WidgetControlPanel({
  config,
  isChatOpen,
  overlayItems,
  redactionStyle,
  selectedOverlay,
  onToggleChat,
  onConfigChange,
  onRedactionStyleChange,
  onOverlaySelect,
  onOverlayLabelChange,
}: WidgetControlPanelProps) {
  return (
    <aside className="surface-panel-strong rounded-[30px] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Operator Controls</h3>
          <p className="mt-1 text-sm text-slate-400">Configure the assistant and keep the preview in view.</p>
        </div>
        <button
          type="button"
          aria-pressed={isChatOpen}
          aria-controls="assistant-preview-panel"
          onClick={onToggleChat}
          className="focus-ring rounded-full border border-white/10 px-3 py-2 text-sm text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/10"
        >
          {isChatOpen ? 'Hide Chat' : 'Show Chat'}
        </button>
      </div>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <label htmlFor="greeting" className="text-sm font-medium text-slate-300">
            Greeting
          </label>
          <textarea
            id="greeting"
            name="greeting"
            autoComplete="off"
            value={config.greeting}
            onChange={(event) => onConfigChange({ ...config, greeting: event.target.value })}
            rows={3}
            className={inputClassName}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="overlay-label" className="text-sm font-medium text-slate-300">
            Selected overlay label
          </label>
          <input
            id="overlay-label"
            name="overlayLabel"
            autoComplete="off"
            value={selectedOverlay?.label ?? ''}
            onChange={(event) => onOverlayLabelChange(event.target.value)}
            className={inputClassName}
            placeholder="Rename overlay..."
          />
          <p className="text-xs leading-5 text-slate-500">Update the active canvas marker without relying on inline content editing.</p>
        </div>

        <div className="space-y-3">
          <span className="text-sm font-medium text-slate-300">Brand color</span>
          <div className="flex items-center gap-3">
            <input
              aria-label="Brand color"
              type="color"
              value={config.brandColor}
              onChange={(event) => onConfigChange({ ...config, brandColor: event.target.value })}
              className="focus-ring h-11 w-20 cursor-pointer rounded-xl border border-white/10 bg-transparent"
            />
            <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-slate-200">{config.brandColor}</span>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-slate-300">Assistant tone</legend>
          <div className="grid grid-cols-3 gap-2">
            {toneOptions.map((tone) => (
              <button
                key={tone}
                type="button"
                aria-pressed={config.tone === tone}
                onClick={() => onConfigChange({ ...config, tone })}
                className={`focus-ring rounded-2xl px-3 py-2 text-sm capitalize transition-colors duration-200 ${
                  config.tone === tone ? 'bg-white text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-slate-300">Redaction style</legend>
          <div className="grid grid-cols-3 gap-2">
            {redactionOptions.map((style) => (
              <button
                key={style}
                type="button"
                aria-pressed={redactionStyle === style}
                onClick={() => onRedactionStyleChange(style)}
                className={`focus-ring rounded-2xl px-3 py-2 text-sm capitalize transition-colors duration-200 ${
                  redactionStyle === style ? 'bg-brand text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
          <div>
            <div id="show-sources-label" className="text-sm font-medium text-white">
              Show sources
            </div>
            <div className="text-xs text-slate-400">Recommended AI assistant pattern for trust.</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={config.showSources}
            aria-labelledby="show-sources-label"
            onClick={() => onConfigChange({ ...config, showSources: !config.showSources })}
            className={`focus-ring relative h-7 w-12 rounded-full transition-colors duration-200 ${config.showSources ? 'bg-brand' : 'bg-white/20'}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-200 ${config.showSources ? 'left-6' : 'left-1'}`}
            />
          </button>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-slate-300">Canvas overlays</legend>
          <div className="flex flex-wrap gap-2">
            {overlayItems.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={selectedOverlay?.id === item.id}
                onClick={() => onOverlaySelect(item.id)}
                className={`focus-ring rounded-full px-3 py-2 text-sm transition-colors duration-200 ${
                  selectedOverlay?.id === item.id ? 'bg-accent text-slate-950' : 'bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </aside>
  );
}
