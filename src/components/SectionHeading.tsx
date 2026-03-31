import { motion } from 'framer-motion';

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="text-balance max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.02]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{body}</p>
    </motion.div>
  );
}
