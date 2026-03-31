import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DesignTokenPanel } from '../components/DesignTokenPanel';
import { FeatureCardGrid } from '../components/FeatureCardGrid';
import { PageSection } from '../components/PageSection';
import { SectionHeading } from '../components/SectionHeading';
import { WidgetSimulator } from '../components/WidgetSimulator';

const heroMetrics = [
  { label: 'Onboarding speed', value: '4 min' },
  { label: 'Citation coverage', value: '92%' },
  { label: 'Teams supported', value: '18' },
];

const workflowLanes = [
  'Operator controls stay visible while the preview updates in real time.',
  'The host product surface keeps charts, notes, and redaction patterns in context.',
  'The assistant stream demonstrates trust with source-aware responses and cleaner hierarchy.',
];

const platformSignals = [
  { name: 'Deployability', detail: 'A believable embedded widget flow, not just a landing page treatment.' },
  { name: 'UX maturity', detail: 'Accessible controls, mobile-safe navigation, and higher-signal page structure.' },
  { name: 'Frontend craft', detail: 'Reusable surfaces, token-backed styling, and stronger interaction boundaries.' },
];

export function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pb-24">
      <PageSection className="pt-12 lg:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="relative pt-6">
            <div className="pill-label">Portfolio Project • Embedded AI Experience</div>
            <h1 className="text-balance mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl xl:text-[5.2rem] xl:leading-[0.94]">
              AI-powered support, presented like a premium product instead of a generic demo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I redesigned Orbit Assist around the visual language of modern AI platforms: deeper contrast, sharper hierarchy,
              stronger dashboard cues, and a widget flow that feels much closer to something a product team could actually ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/playground"
                className="focus-ring rounded-[10px] border border-brand/30 bg-brand px-6 py-3 text-base font-semibold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(95,70,255,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Open live playground
              </Link>
              <a
                href="#design-system"
                className="focus-ring rounded-[10px] border border-white/10 bg-white/[0.04] px-6 py-3 text-base font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-white/[0.08]"
              >
                Review system details
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="surface-subtle rounded-[12px] p-4">
                  <div className="metric-value text-3xl font-semibold text-white">{metric.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {platformSignals.map((signal) => (
                <div key={signal.name} className="flex gap-4 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_rgba(159,140,255,0.8)]" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d3cbff]">{signal.name}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{signal.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-orbit" aria-hidden="true" />
          </div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="platform-shell p-6 sm:p-7"
          >
            <div className="grid-sheen absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="eyebrow mb-2">Product Narrative</div>
                  <h2 className="text-balance max-w-2xl text-3xl font-semibold tracking-tight text-white">
                    One shell, one live operator lane, one believable embedded AI workflow.
                  </h2>
                </div>
                <div className="rounded-[8px] border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm uppercase tracking-[0.12em] text-emerald-200">
                  Demo posture online
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[220px_minmax(0,1fr)]">
                <div className="surface-subtle rounded-[14px] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Modules</div>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-[10px] border border-brand/20 bg-brand/10 px-4 py-3 text-sm uppercase tracking-[0.12em] text-[#ebe6ff]">Overview</div>
                    <div className="rounded-[10px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.12em] text-slate-300">Playground</div>
                    <div className="rounded-[10px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.12em] text-slate-300">System</div>
                    <div className="rounded-[10px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.12em] text-slate-300">Trust controls</div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                    <div className="surface-subtle rounded-[14px] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Growth analytics</div>
                          <div className="mt-2 text-xl font-semibold text-white">Embedded support performance tied to product context.</div>
                        </div>
                        <div className="rounded-[8px] border border-white/8 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-300">
                          Q2 live
                        </div>
                      </div>
                      <div className="chart-bars mt-8 flex h-36 items-end gap-3">
                        <span style={{ height: '34%' }} />
                        <span style={{ height: '44%' }} />
                        <span style={{ height: '62%' }} />
                        <span style={{ height: '54%' }} />
                        <span style={{ height: '76%' }} />
                        <span style={{ height: '82%' }} />
                        <span style={{ height: '96%' }} />
                      </div>
                    </div>

                    <div className="surface-subtle rounded-[14px] p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Platform state</div>
                      <div className="mt-3 text-4xl font-semibold tracking-tight text-white">Ready</div>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        The app now leads with a dashboard-grade artifact and keeps the portfolio story inside the product framing.
                      </p>
                    </div>
                  </div>

                  <div className="surface-subtle rounded-[14px] p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">What changed</div>
                    <div className="mt-4 grid gap-3">
                      {workflowLanes.map((item) => (
                        <div key={item} className="flex gap-3 rounded-[10px] border border-white/8 bg-white/[0.03] px-4 py-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(159,140,255,0.7)]" aria-hidden="true" />
                          <p className="text-sm leading-7 text-slate-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageSection>

      <PageSection className="pt-16">
        <SectionHeading
          eyebrow="UI Direction"
          title="A cinematic AI-platform style with stronger proof, sharper rhythm, and less portfolio filler"
          body="This direction takes cues from premium analytics products: near-black surfaces, luminous violet accents, dashboard signals, and structure that puts the product workflow ahead of self-description."
        />
        <FeatureCardGrid />
      </PageSection>

      <PageSection className="pt-16">
        <SectionHeading
          eyebrow="Interactive Demo"
          title="The widget now looks and behaves like part of the same platform world"
          body="Configuration, workspace context, assistant responses, and embed export are grouped into one system. The refactor from earlier is still intact, but the presentation now carries more product credibility."
        />
        <div className="mt-10">
          <WidgetSimulator />
        </div>
      </PageSection>

      <PageSection id="design-system" className="section-anchor pt-16">
        <SectionHeading
          eyebrow="Design System"
          title="Shared tokens, surface tiers, and visual rules that support the AI product narrative"
          body="The system page now explains the UI as something I would hand off: not just colors and spacing, but the logic behind shells, support panels, and luminous emphasis states."
        />
        <div className="mt-10">
          <DesignTokenPanel />
        </div>
      </PageSection>
    </div>
  );
}
