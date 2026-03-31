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
      return 'blur(8px)';
    case 'pixel':
      return 'blur(1px) contrast(1.1) saturate(0.8)';
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
          <p className="text-sm uppercase tracking-[0.22em] text-brand">Host Application</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Customer success cockpit</h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          Single preview workspace
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {hostCards.map((card) => (
          <div key={card.title} className="surface-subtle rounded-3xl p-4">
            <div className="text-sm text-slate-400">{card.title}</div>
            <div className="mt-2 flex items-end justify-between gap-3">
              <div className="metric-value text-2xl font-semibold text-white">{card.value}</div>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">{card.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm text-slate-400">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden="true" />
          <span className="ml-2">Editor canvas</span>
        </div>
        <div className="relative h-[360px] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
          <div className="absolute inset-0 opacity-40 noise" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(91,108,248,0.3),transparent_20%),radial-gradient(circle_at_70%_55%,rgba(20,184,166,0.2),transparent_18%)]"
            aria-hidden="true"
          />
          <div className="absolute left-8 top-8 h-44 w-64 rounded-[28px] bg-white/10 backdrop-blur-sm" aria-hidden="true" />
          <div className="absolute left-72 top-12 h-28 w-44 rounded-[28px] bg-brand/20 backdrop-blur-sm" aria-hidden="true" />
          <div
            aria-hidden="true"
            className={`absolute right-16 top-20 h-28 w-44 rounded-[20px] bg-slate-200/10 ${redactionStyle === 'blackout' ? 'bg-black/80' : ''}`}
            style={{ filter: redactBackground(redactionStyle) }}
          />

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
                className={`focus-ring absolute select-none rounded-2xl border px-4 py-3 text-left shadow-panel ${
                  active ? 'border-accent bg-accent text-slate-950' : 'border-white/10 bg-white/90 text-slate-950'
                }`}
                style={{ left: overlay.x, top: overlay.y, width: overlay.width }}
              >
                <div className="text-xs uppercase tracking-[0.22em] opacity-70">{overlay.kind}</div>
                <div className="mt-1 text-sm font-semibold">{overlay.label}</div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
