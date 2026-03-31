import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FeatureCardGrid } from '../components/FeatureCardGrid';
import { SectionHeading } from '../components/SectionHeading';
import { WidgetSimulator } from '../components/WidgetSimulator';
import { DesignTokenPanel } from '../components/DesignTokenPanel';

export function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pb-24">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand">
            Portfolio demo · TypeScript · Tailwind · Framer Motion · Vite
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            A polished B2B SaaS demo with an embeddable AI widget and motion-first UX.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Orbit Assist is a portfolio-quality frontend concept that showcases Figma-friendly component design,
            accessibility, AI/LLM UX patterns, embeddable widget development, and purposeful motion for a
            non-technical SaaS audience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/playground"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Open interactive playground
            </Link>
            <a
              href="#design-system"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              View design system
            </a>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-panel"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Embeddable widget', 'Preview the assistant inside a host app shell and export code.'],
              ['Framer Motion', 'Animate layout shifts, cards, hover states, and chat transitions.'],
              ['Accessible UX', 'Keyboard-friendly controls, clear labels, focus rings, reduced motion.'],
              ['Figma thinking', 'Tokens, primitives, and predictable component structure for handoff.'],
            ].map(([title, body]) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
              >
                <div className="text-sm uppercase tracking-[0.22em] text-brand">Skill</div>
                <div className="mt-2 text-xl font-semibold text-white">{title}</div>
                <div className="mt-3 text-sm leading-6 text-slate-300">{body}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <SectionHeading
          eyebrow="What this portfolio piece proves"
          title="Designed for SaaS teams, product designers, and AI-first interfaces"
          body="The page structure and interaction model are aimed at the type of product work common in modern B2B SaaS: AI chat, embeddable flows, motion-led onboarding, and low-friction configuration for non-technical operators."
        />
        <FeatureCardGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionHeading
          eyebrow="Interactive demo"
          title="Try the embeddable widget, canvas editor, and privacy tools"
          body="This section combines the core skills from the brief into one experience: a configurable widget, draggable overlays, inline editing, layout-aware AI chat, and a simple image redaction preview."
        />
        <div className="mt-10">
          <WidgetSimulator />
        </div>
      </section>

      <section id="design-system" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionHeading
          eyebrow="Design system"
          title="Token-driven building blocks that feel ready for Figma handoff"
          body="A simple token layer and reusable layout primitives make this repo easy to extend, easy to translate from Figma, and easy for an AI coding assistant to modify without deep context."
        />
        <div className="mt-10">
          <DesignTokenPanel />
        </div>
      </section>
    </div>
  );
}
