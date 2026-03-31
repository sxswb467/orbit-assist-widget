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
    <aside className="surface-panel-strong rounded-[14px] p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="eyebrow mb-2">Operator Rail</div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">Configure the assistant without leaving the preview.</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            This panel keeps brand behavior, trust settings, and overlay labeling inside one workflow.
          </p>
        </div>
        <button
          type="button"
          aria-pressed={isChatOpen}
          aria-controls="assistant-preview-panel"
          onClick={onToggleChat}
          className="focus-ring rounded-[10px] border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-brand/30 hover:bg-brand/10"
        >
          {isChatOpen ? 'Hide chat' : 'Show chat'}
        </button>
      </div>

      <div className="glow-divider mt-6" aria-hidden="true" />

      <div className="mt-6 space-y-5">
        <div className="surface-subtle rounded-[12px] p-4">
          <label htmlFor="greeting" className="text-sm font-medium text-slate-200">
            Greeting
          </label>
          <textarea
            id="greeting"
            name="greeting"
            autoComplete="off"
            value={config.greeting}
            onChange={(event) => onConfigChange({ ...config, greeting: event.target.value })}
            rows={3}
            className={`${inputClassName} mt-3`}
          />
        </div>

        <div className="surface-subtle rounded-[12px] p-4">
          <label htmlFor="overlay-label" className="text-sm font-medium text-slate-200">
            Active overlay label
          </label>
          <input
            id="overlay-label"
            name="overlayLabel"
            autoComplete="off"
            value={selectedOverlay?.label ?? ''}
            onChange={(event) => onOverlayLabelChange(event.target.value)}
            className={`${inputClassName} mt-3`}
            placeholder="Rename overlay..."
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">Renaming stays explicit and accessible instead of relying on inline editable chips.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="surface-subtle rounded-[12px] p-4">
            <span className="text-sm font-medium text-slate-200">Brand color</span>
            <div className="mt-3 flex items-center gap-3">
              <input
                aria-label="Brand color"
                type="color"
                value={config.brandColor}
                onChange={(event) => onConfigChange({ ...config, brandColor: event.target.value })}
                className="focus-ring h-11 w-20 cursor-pointer rounded-xl border border-white/10 bg-transparent"
              />
              <span className="rounded-[8px] border border-white/8 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">{config.brandColor}</span>
            </div>
          </div>

          <div className="surface-subtle flex items-center justify-between rounded-[12px] p-4">
            <div>
              <div id="show-sources-label" className="text-sm font-medium text-white">
                Source citations
              </div>
              <div className="mt-1 text-xs leading-5 text-slate-400">Recommended for trust-heavy enterprise answers.</div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={config.showSources}
              aria-labelledby="show-sources-label"
              onClick={() => onConfigChange({ ...config, showSources: !config.showSources })}
              className={`focus-ring relative h-7 w-12 rounded-[8px] transition-colors duration-200 ${config.showSources ? 'bg-brand' : 'bg-white/20'}`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-[6px] bg-white transition-all duration-200 ${config.showSources ? 'left-6' : 'left-1'}`}
              />
            </button>
          </div>
        </div>

        <fieldset className="surface-subtle rounded-[12px] p-4">
          <legend className="px-1 text-sm font-medium text-slate-200">Assistant tone</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {toneOptions.map((tone) => (
              <button
                key={tone}
                type="button"
                aria-pressed={config.tone === tone}
                onClick={() => onConfigChange({ ...config, tone })}
                className={`focus-ring rounded-[10px] px-3 py-2 text-sm uppercase tracking-[0.12em] transition-all duration-200 ${
                  config.tone === tone
                    ? 'border border-brand/40 bg-brand/15 text-white shadow-[0_0_24px_rgba(123,92,255,0.2)]'
                    : 'border border-white/8 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="surface-subtle rounded-[12px] p-4">
          <legend className="px-1 text-sm font-medium text-slate-200">Redaction style</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {redactionOptions.map((style) => (
              <button
                key={style}
                type="button"
                aria-pressed={redactionStyle === style}
                onClick={() => onRedactionStyleChange(style)}
                className={`focus-ring rounded-[10px] px-3 py-2 text-sm uppercase tracking-[0.12em] transition-all duration-200 ${
                  redactionStyle === style
                    ? 'border border-brand/40 bg-brand/15 text-white shadow-[0_0_24px_rgba(123,92,255,0.2)]'
                    : 'border border-white/8 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="surface-subtle rounded-[12px] p-4">
          <legend className="px-1 text-sm font-medium text-slate-200">Canvas overlays</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {overlayItems.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={selectedOverlay?.id === item.id}
                onClick={() => onOverlaySelect(item.id)}
                className={`focus-ring rounded-[10px] px-3 py-2 text-sm uppercase tracking-[0.12em] transition-all duration-200 ${
                  selectedOverlay?.id === item.id
                    ? 'border border-brand/40 bg-brand/15 text-white shadow-[0_0_24px_rgba(123,92,255,0.2)]'
                    : 'border border-white/8 bg-white/[0.03] text-slate-200 hover:bg-white/[0.06]'
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
