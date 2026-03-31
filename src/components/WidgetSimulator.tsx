import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import type { RedactionStyle, WidgetConfig } from '../lib/types';
import { chatMessages, defaultWidgetConfig, overlaySeed } from '../data/mockContent';

const hostCards = [
  { title: 'Q2 expansion revenue', value: '$184K', badge: '+18%' },
  { title: 'Accounts using the widget', value: '1,284', badge: '+9%' },
  { title: 'Median first-response time', value: '36 sec', badge: '-14%' },
];

function redactBackground(style: RedactionStyle): string {
  switch (style) {
    case 'blur':
      return 'blur(8px)';
    case 'pixel':
      return 'blur(1px) contrast(1.1) saturate(0.8)';
    default:
      return 'none';
  }
}

export function WidgetSimulator({ expanded = false }: { expanded?: boolean }) {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [config, setConfig] = useState<WidgetConfig>(defaultWidgetConfig);
  const [redactionStyle, setRedactionStyle] = useState<RedactionStyle>('pixel');
  const [selectedOverlay, setSelectedOverlay] = useState<string>('1');
  const reduceMotion = useReducedMotion();

  const embedCode = useMemo(
    () => `<script\n  src="https://cdn.orbitassist.dev/widget.js"\n  data-brand="${config.brandColor}"\n  data-greeting="${config.greeting}"\n  data-tone="${config.tone}"\n></script>`,
    [config.brandColor, config.greeting, config.tone],
  );

  return (
    <div className={`grid gap-6 ${expanded ? 'xl:grid-cols-[360px_minmax(0,1fr)]' : 'lg:grid-cols-[320px_minmax(0,1fr)]'}`}>
      <aside className="rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-panel backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Widget controls</h3>
            <p className="mt-1 text-sm text-slate-400">Built for non-technical B2B teams.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsChatOpen((value) => !value)}
            className="rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-pressed={isChatOpen}
          >
            {isChatOpen ? 'Hide chat' : 'Show chat'}
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">Greeting</span>
            <textarea
              value={config.greeting}
              onChange={(event) => setConfig((current) => ({ ...current, greeting: event.target.value }))}
              rows={3}
              className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white focus:border-brand focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">Brand color</span>
            <div className="flex items-center gap-3">
              <input
                aria-label="Brand color"
                type="color"
                value={config.brandColor}
                onChange={(event) => setConfig((current) => ({ ...current, brandColor: event.target.value }))}
                className="h-11 w-20 cursor-pointer rounded-xl border border-white/10 bg-transparent"
              />
              <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-slate-200">{config.brandColor}</span>
            </div>
          </label>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-slate-300">Assistant tone</legend>
            <div className="grid grid-cols-3 gap-2">
              {(['professional', 'friendly', 'proactive'] as const).map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setConfig((current) => ({ ...current, tone }))}
                  className={`rounded-2xl px-3 py-2 text-sm capitalize transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
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
              {(['blur', 'pixel', 'blackout'] as const).map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setRedactionStyle(style)}
                  className={`rounded-2xl px-3 py-2 text-sm capitalize transition ${
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
              <div className="text-sm font-medium text-white">Show sources</div>
              <div className="text-xs text-slate-400">Recommended AI/LLM UX pattern.</div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={config.showSources}
              onClick={() => setConfig((current) => ({ ...current, showSources: !current.showSources }))}
              className={`relative h-7 w-12 rounded-full transition ${config.showSources ? 'bg-brand' : 'bg-white/20'}`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${config.showSources ? 'left-6' : 'left-1'}`}
              />
            </button>
          </div>

          <div>
            <div className="mb-2 text-sm font-medium text-slate-300">Selected overlay</div>
            <div className="flex flex-wrap gap-2">
              {overlaySeed.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedOverlay(item.id)}
                  className={`rounded-full px-3 py-2 text-sm transition ${
                    selectedOverlay === item.id ? 'bg-accent text-slate-950' : 'bg-white/5 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <section className="space-y-5">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 p-6 shadow-panel">
          <div className="absolute inset-0 panel-grid bg-grid opacity-20" />
          <div className="relative grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className={`transition-all duration-300 ${isChatOpen ? 'xl:pr-0' : 'xl:col-span-2'}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-brand">Host application</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Customer success cockpit</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Infinite canvas + inline editing demo
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {hostCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-slate-400">{card.title}</div>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <div className="text-2xl font-semibold text-white">{card.value}</div>
                      <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2">Editor canvas</span>
                </div>
                <div className="relative h-[360px] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
                  <div className="absolute inset-0 opacity-40 noise" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(91,108,248,0.3),transparent_20%),radial-gradient(circle_at_70%_55%,rgba(20,184,166,0.2),transparent_18%)]" />
                  <div className="absolute left-8 top-8 h-44 w-64 rounded-[28px] bg-white/10 backdrop-blur-sm" />
                  <div className="absolute left-72 top-12 h-28 w-44 rounded-[28px] bg-brand/20 backdrop-blur-sm" />
                  <div
                    aria-hidden="true"
                    className={`absolute right-16 top-20 h-28 w-44 rounded-[20px] bg-slate-200/10 ${redactionStyle === 'blackout' ? 'bg-black/80' : ''}`}
                    style={{ filter: redactBackground(redactionStyle) }}
                  />

                  {overlaySeed.map((overlay) => {
                    const active = selectedOverlay === overlay.id;
                    return (
                      <motion.button
                        key={overlay.id}
                        drag
                        dragMomentum={false}
                        whileDrag={{ scale: 1.03 }}
                        whileHover={{ scale: 1.02 }}
                        transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 240, damping: 18 }}
                        onClick={() => setSelectedOverlay(overlay.id)}
                        className={`absolute rounded-2xl border px-4 py-3 text-left shadow-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                          active
                            ? 'border-accent bg-accent text-slate-950'
                            : 'border-white/10 bg-white/90 text-slate-950'
                        }`}
                        style={{ left: overlay.x, top: overlay.y, width: overlay.width }}
                      >
                        <div className="text-xs uppercase tracking-[0.22em] opacity-70">{overlay.kind}</div>
                        <div
                          className="mt-1 text-sm font-semibold"
                          contentEditable
                          suppressContentEditableWarning
                          aria-label={`${overlay.label} editable overlay`}
                        >
                          {overlay.label}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isChatOpen && (
                <motion.aside
                  key="chat-panel"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 32 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                  transition={{ duration: 0.28 }}
                  className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4"
                  aria-label="AI chat panel"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm uppercase tracking-[0.22em] text-slate-500">AI panel</div>
                      <div className="mt-1 text-lg font-semibold text-white">Assistant preview</div>
                    </div>
                    <div
                      className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: config.brandColor }}
                    >
                      {config.tone}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200">
                      {config.greeting}
                    </div>
                    {chatMessages.map((message, index) => (
                      <div
                        key={`${message.role}-${index}`}
                        className={`rounded-2xl p-4 text-sm leading-6 ${
                          message.role === 'assistant'
                            ? 'border border-white/10 bg-white/5 text-slate-200'
                            : 'ml-auto max-w-[90%] bg-brand/20 text-white'
                        }`}
                      >
                        <div className="mb-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">{message.role}</div>
                        {message.text}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900 p-3">
                    <label htmlFor="chat-input" className="sr-only">
                      Message input
                    </label>
                    <div className="flex gap-3">
                      <input
                        id="chat-input"
                        placeholder="Ask the assistant a question..."
                        className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand focus:outline-none"
                      />
                      <button
                        type="button"
                        className="rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        style={{ backgroundColor: config.brandColor }}
                      >
                        Send
                      </button>
                    </div>
                    {config.showSources && (
                      <div className="mt-3 rounded-2xl bg-white/5 px-3 py-2 text-xs leading-5 text-slate-400">
                        Sources: docs/help-center/setup · account-policies/security · product/changelog/q2
                      </div>
                    )}
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Embed export</div>
            <pre className="mt-3 overflow-auto rounded-3xl bg-slate-950 p-4 text-sm leading-6 text-slate-200">
              <code>{embedCode}</code>
            </pre>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
            <div className="text-sm uppercase tracking-[0.22em] text-slate-500">What this demonstrates</div>
            <ul className="mt-3 space-y-2 pl-5">
              <li>Embeddable widget configuration with a host-application preview.</li>
              <li>Framer Motion layout changes when the AI panel opens or closes.</li>
              <li>Inline-editable draggable overlays on an infinite-canvas style surface.</li>
              <li>Image redaction concepts for privacy-sensitive AI workflows.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
