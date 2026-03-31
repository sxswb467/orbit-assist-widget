import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, type PropsWithChildren } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/playground', label: 'Playground' },
  { to: '/design-system', label: 'System' },
];

function navLinkClass(isActive: boolean) {
  return [
    'focus-ring rounded-[10px] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200',
    isActive
      ? 'border border-brand/40 bg-brand/15 text-white shadow-[0_0_24px_rgba(123,92,255,0.22)]'
      : 'border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white',
  ].join(' ');
}

export function AppShell({ children }: PropsWithChildren) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-white/6 bg-[#06070d]/78 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="focus-ring flex items-center gap-4 text-white no-underline">
            <motion.div
              layout
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[12px] border border-brand/25 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_45%),linear-gradient(180deg,rgba(123,92,255,0.36),rgba(21,23,38,0.98))] shadow-[0_0_30px_rgba(95,70,255,0.25)]"
            >
              <div className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" aria-hidden="true" />
              <span className="text-sm font-black uppercase tracking-[0.22em]">OA</span>
            </motion.div>
            <div>
              <div className="text-[0.64rem] uppercase tracking-[0.34em] text-slate-500">Embedded AI Platform</div>
              <div className="text-lg font-semibold tracking-tight">Orbit Assist</div>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => navLinkClass(isActive)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-[8px] border border-emerald-400/15 bg-emerald-400/8 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200/90">
              Demo online
            </div>
            <Link
              to="/playground"
              className="focus-ring rounded-[10px] border border-brand/30 bg-brand px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_rgba(95,70,255,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Open live view
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMobileNavOpen((value) => !value)}
            className="focus-ring inline-flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/[0.08] md:hidden"
          >
            <span className="font-medium">Menu</span>
            <span aria-hidden="true">{isMobileNavOpen ? '−' : '+'}</span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMobileNavOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden border-t border-white/8 bg-[#06070d]/95 md:hidden"
            >
              <nav aria-label="Mobile primary" className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className={({ isActive }) => navLinkClass(isActive)}>
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/playground"
                  className="focus-ring mt-2 rounded-[10px] border border-brand/30 bg-brand px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_rgba(95,70,255,0.28)]"
                >
                  Open live view
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main">{children}</main>
    </div>
  );
}
