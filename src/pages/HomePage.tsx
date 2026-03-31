import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DesignTokenPanel } from '../components/DesignTokenPanel';
import { FeatureCardGrid } from '../components/FeatureCardGrid';
import { PageSection } from '../components/PageSection';
import { SectionHeading } from '../components/SectionHeading';
import { WidgetSimulator } from '../components/WidgetSimulator';

const heroStats = [
  { label: 'Setup time', value: '4 min' },
  { label: 'Source-aware replies', value: '92%' },
  { label: 'Playbook coverage', value: '18 teams' },
];

const heroThreads = [
  'Operators can tune voice, greetings, and citations without engineering help.',
  'The preview keeps configuration and output in one field of view.',
  'Motion only supports hierarchy, state change, and confidence.',
];

export function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pb-24">
      <PageSection className="pt-12 lg:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <div className="relative pt-6">
            <div className="pill-label">Orbit Assist Demo System</div>
            <h1 className="text-balance mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
              A sharper demo for embedded AI support inside real product surfaces.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This version shifts the project from a generic portfolio landing page toward a product story: faster setup,
              clearer operator controls, stronger preview hierarchy, and fewer decorative UI patterns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/playground"
                className="focus-ring rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Open Playground
              </Link>
              <a
                href="#design-system"
                className="focus-ring rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Review Design System
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="border-t border-white/10 pt-4">
                  <div className="metric-value text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="hero-orbit" aria-hidden="true" />
          </div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="surface-panel-strong relative overflow-hidden rounded-[36px] p-6 sm:p-8"
          >
            <div className="grid-sheen absolute inset-0 opacity-25" aria-hidden="true" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden="true" />
            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="eyebrow text-[0.72rem] text-brand/90">Product Direction</div>
                  <h2 className="text-balance text-3xl font-semibold text-white">One operator rail, one live preview, one believable workflow.</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                  Live demo posture
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_260px]">
                <div className="surface-subtle rounded-[28px] p-5">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Operator Rail</div>
                      <div className="mt-2 text-xl font-semibold text-white">Configuration stays close to the preview</div>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">Focused</div>
                  </div>
                  <div className="mt-5 space-y-4">
                    {heroThreads.map((item) => (
                      <div key={item} className="flex gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                        <p className="min-w-0 text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="surface-subtle rounded-[28px] p-5">
                    <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Current State</div>
                    <div className="mt-3 text-3xl font-semibold text-white">Ready</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      The interface now reads like a compact product artifact instead of a stack of portfolio callouts.
                    </p>
                  </div>
                  <div className="surface-subtle rounded-[28px] p-5">
                    <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Preview Rules</div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                      <li>Clear focus states across controls</li>
                      <li>Reduced mobile navigation failure</li>
                      <li>Live rename for canvas overlays</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageSection>

      <PageSection className="pt-16">
        <SectionHeading
          eyebrow="What improved"
          title="A stronger information architecture for the same demo narrative"
          body="The project still shows the same capabilities, but the page now leads with the actual product surface, trims self-referential copy, and relies more on layout rhythm than glassmorphism card stacks."
        />
        <FeatureCardGrid />
      </PageSection>

      <PageSection className="pt-16">
        <SectionHeading
          eyebrow="Interactive Demo"
          title="Tune the assistant, rename overlays, and inspect the host experience"
          body="The widget playground is now structured more like a real operator workflow. Configuration, canvas state, preview chat, and embed output are distinct surfaces with clearer responsibility."
        />
        <div className="mt-10">
          <WidgetSimulator />
        </div>
      </PageSection>

      <PageSection id="design-system" className="section-anchor pt-16">
        <SectionHeading
          eyebrow="Design System"
          title="Shared tokens and surfaces that support the demo instead of competing with it"
          body="The visual system now leans on reusable surface treatments, type rhythm, and global tokens so future changes do not have to repeat hardcoded panel styles in every route."
        />
        <div className="mt-10">
          <DesignTokenPanel />
        </div>
      </PageSection>
    </div>
  );
}
