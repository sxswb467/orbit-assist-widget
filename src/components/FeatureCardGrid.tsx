import { motion } from 'framer-motion';
import { featureCards } from '../data/mockContent';

export function FeatureCardGrid() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-2">
      {featureCards.map((card, index) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          className="surface-panel group relative overflow-hidden rounded-[14px] p-6"
        >
          <div className="hero-mesh opacity-50" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-[8px] border border-brand/20 bg-brand/10 px-3 py-1 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#cbc3ff]">
                0{index + 1}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-brand/40 to-transparent" aria-hidden="true" />
            </div>
            <h3 className="mt-5 max-w-sm text-2xl font-semibold tracking-tight text-white">{card.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{card.body}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(159,140,255,0.8)]" aria-hidden="true" />
              Product-grade interaction, systemized styling, clearer proof.
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
