import { motion } from 'framer-motion';
import { colorTokens, figmaNotes, spacingTokens } from '../lib/designTokens';

export function DesignTokenPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-panel">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-brand">Color tokens</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">Figma-to-code friendly system</h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Ready for handoff
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {colorTokens.map((token) => (
              <motion.div
                key={token.name}
                whileHover={{ y: -3 }}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl border border-white/10" style={{ backgroundColor: token.value }} />
                  <div>
                    <div className="font-semibold text-white">{token.name}</div>
                    <div className="mt-1 text-sm text-slate-300">{token.value}</div>
                    <div className="mt-2 text-sm text-slate-500">{token.use}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-panel">
          <div className="text-sm uppercase tracking-[0.22em] text-brand">Spacing + radius</div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {spacingTokens.map((token) => (
              <div key={token.name} className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                <div className="text-sm font-medium text-slate-300">{token.name}</div>
                <div className="mt-3 text-2xl font-semibold text-white">{token.value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-panel backdrop-blur">
        <div className="text-sm uppercase tracking-[0.22em] text-brand">Design notes</div>
        <h3 className="mt-2 text-2xl font-semibold text-white">Why this feels like a Figma handoff</h3>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
          {figmaNotes.map((note) => (
            <li key={note} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {note}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
