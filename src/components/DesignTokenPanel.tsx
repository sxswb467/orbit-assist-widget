import { motion } from 'framer-motion';
import { colorTokens, figmaNotes, spacingTokens } from '../lib/designTokens';

export function DesignTokenPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <section className="surface-panel rounded-[14px] p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="eyebrow mb-2">Platform Tokens</div>
              <h3 className="text-balance max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                The visual system now behaves like a product shell, not a disconnected moodboard.
              </h3>
            </div>
            <div className="rounded-[8px] border border-brand/20 bg-brand/10 px-4 py-2 text-sm uppercase tracking-[0.12em] text-[#d4ccff]">
              Handoff-ready foundations
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {colorTokens.map((token) => (
              <motion.div key={token.name} whileHover={{ y: -3 }} className="surface-subtle rounded-[12px] p-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-[8px] border border-white/10 shadow-[0_0_30px_rgba(95,70,255,0.15)]" style={{ backgroundColor: token.value }} />
                  <div className="min-w-0">
                    <div className="font-semibold text-white">{token.name}</div>
                    <div className="mt-1 text-sm text-slate-300">{token.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-500">{token.use}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="surface-panel rounded-[14px] p-6 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="eyebrow mb-2">Spacing + Radii</div>
              <h3 className="text-xl font-semibold text-white">Consistent spacing gives the app the same cadence across routes.</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {spacingTokens.map((token) => (
                  <div key={token.name} className="surface-subtle rounded-[12px] p-4">
                    <div className="text-sm font-medium text-slate-300">{token.name}</div>
                    <div className="metric-value mt-3 text-2xl font-semibold text-white">{token.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-panel-strong rounded-[14px] p-5">
              <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Runtime Readout</div>
              <div className="mt-3 text-3xl font-semibold text-white">3 surface tiers</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Primary shells, support panels, and utility surfaces now share one token system instead of route-specific styling.
              </p>
              <div className="chart-bars mt-6 flex h-28 items-end gap-3">
                <span style={{ height: '42%' }} />
                <span style={{ height: '64%' }} />
                <span style={{ height: '78%' }} />
                <span style={{ height: '56%' }} />
                <span style={{ height: '88%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '96%' }} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <aside className="surface-panel-strong rounded-[14px] p-6 sm:p-7">
        <div className="eyebrow mb-2">System Notes</div>
        <h3 className="text-balance text-2xl font-semibold tracking-tight text-white">Why the UI now feels closer to a premium AI platform handoff</h3>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
          {figmaNotes.map((note) => (
            <li key={note} className="surface-subtle rounded-[10px] px-4 py-3">
              {note}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
