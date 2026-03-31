import { motion } from 'framer-motion';
import { featureCards } from '../data/mockContent';

export function FeatureCardGrid() {
  return (
    <div className="mt-12 grid gap-x-10 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-2">
      {featureCards.map((card, index) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          className="border-b border-white/10 pb-8"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="metric-value text-xs uppercase tracking-[0.24em] text-slate-500">0{index + 1}</span>
            <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{card.body}</p>
        </motion.article>
      ))}
    </div>
  );
}
