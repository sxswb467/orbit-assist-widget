import { motion } from 'framer-motion';
import { featureCards } from '../data/mockContent';

export function FeatureCardGrid() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {featureCards.map((card, index) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
            0{index + 1}
          </div>
          <h3 className="text-xl font-semibold text-white">{card.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{card.body}</p>
        </motion.article>
      ))}
    </div>
  );
}
