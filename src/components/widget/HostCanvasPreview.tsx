import { motion } from 'framer-motion';
import type { OverlayItem, RedactionStyle } from '../../lib/types';
import { hostCards } from './constants';

type HostCanvasPreviewProps = {
  overlayItems: OverlayItem[];
  redactionStyle: RedactionStyle;
  reduceMotion: boolean;
  selectedOverlayId?: string;
  onOverlaySelect: (overlayId: string) => void;
};

function redactBackground(style: RedactionStyle): string {
  switch (style) {
    case 'blur':
      return 'blur(10px)';
    case 'pixel':
      return 'blur(1.5px) contrast(1.15) saturate(0.8)';
    default:
      return 'none';
  }
}

export function HostCanvasPreview({
  overlayItems,
  redactionStyle,
  reduceMotion,
  selectedOverlayId,
  onOverlaySelect,
}: HostCanvasPreviewProps) {
  return (
    <div className="min-w-0 transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#a79cff]">Live workspace</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Revenue intelligence cockpit</h3>
        </div>
        <div className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-2 text-sm uppercase tracking-[0.12em] text-slate-300">
          Single-screen operator preview
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {hostCards.map((card) => (
          <div key={card.title} className="surface-subtle rounded-[12px] p-4">
            <div className="text-sm text-slate-400">{card.title}</div>
            <div className="mt-2 flex items-end justify-between gap-3">
              <div className="metric-value text-2xl font-semibold text-white">{card.value}</div>
              <span className="rounded-[8px] border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#cfc5ff]">{card.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="platform-shell mt-6">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3 text-sm text-slate-400">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="ml-2">Workspace canvas</span>
        </div>
        <div className="relative h-[380px] overflow-hidden p-6">
          <div className="absolute inset-0 opacity-40 noise" aria-hidden="true" />
          <div className="orbital-ring left-[10%] top-[12%] h-48 w-48" aria-hidden="true" />
          <div className="orbital-ring left-[4%] top-[6%] h-72 w-72" aria-hidden="true" />
          <div className="orbital-ring right-[8%] top-[14%] h-56 w-56" aria-hidden="true" />
          <div className="absolute left-6 top-6 right-6 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]" aria-hidden="true">
            <div className="surface-subtle rounded-[12px] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Portfolio health</div>
                  <div className="mt-2 text-xl font-semibold text-white">Signals across expansion, churn risk, and renewal delay.</div>
                </div>
                <div className="rounded-[8px] border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-emerald-200">
                  Stable
                </div>
              </div>
              <div className="chart-bars mt-8 flex h-36 items-end gap-3">
                <span style={{ height: '36%' }} />
                <span style={{ height: '62%' }} />
                <span style={{ height: '46%' }} />
                <span style={{ height: '74%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '85%' }} />
                <span style={{ height: '68%' }} />
                <span style={{ height: '96%' }} />
              </div>
            </div>
            <div className="surface-subtle rounded-[12px] p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Operator lane</div>
              <div className="mt-4 space-y-3">
                <div className="rounded-[10px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">Executive summary queued</div>
                <div className="rounded-[10px] border border-brand/20 bg-brand/10 px-4 py-3 text-sm text-[#ddd7ff]">Sources attached to account narrative</div>
                <div
                  className={`rounded-[10px] border px-4 py-3 text-sm ${redactionStyle === 'blackout' ? 'border-black/60 bg-black/70 text-slate-300' : 'border-white/8 bg-white/[0.03] text-slate-200'}`}
                  style={{ filter: redactBackground(redactionStyle) }}
                >
                  Sensitive note area protected
                </div>
              </div>
            </div>
          </div>

          {overlayItems.map((overlay) => {
            const active = selectedOverlayId === overlay.id;
            return (
              <motion.button
                key={overlay.id}
                type="button"
                drag
                dragMomentum={false}
                dragElastic={0.04}
                whileDrag={{ scale: 1.03 }}
                whileHover={{ scale: 1.02 }}
                transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 240, damping: 18 }}
                aria-pressed={active}
                onClick={() => onOverlaySelect(overlay.id)}
                className={`focus-ring absolute select-none rounded-[10px] border px-4 py-3 text-left shadow-panel backdrop-blur-sm ${
                  active
                    ? 'border-brand/50 bg-brand/20 text-white shadow-[0_0_40px_rgba(123,92,255,0.28)]'
                    : 'border-white/10 bg-[#f7f7ff]/90 text-slate-950'
                }`}
                style={{ left: overlay.x, top: overlay.y, width: overlay.width }}
              >
                <div className="text-[11px] uppercase tracking-[0.22em] opacity-70">{overlay.kind}</div>
                <div className="mt-1 text-sm font-semibold">{overlay.label}</div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
