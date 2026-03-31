import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, type PropsWithChildren } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/playground', label: 'Playground' },
  { to: '/design-system', label: 'Design System' },
];

function navLinkClass(isActive: boolean) {
  return [
    'focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
    isActive ? 'bg-white text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white',
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

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="focus-ring flex items-center gap-3 text-white no-underline">
            <motion.div
              layout
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-glow shadow-panel"
            >
              <span className="text-lg font-black">OA</span>
            </motion.div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Orbit Assist</div>
              <div className="text-lg font-semibold">Frontend Demo System</div>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => navLinkClass(isActive)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMobileNavOpen((value) => !value)}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10 md:hidden"
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
              className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
            >
              <nav aria-label="Mobile primary" className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className={({ isActive }) => navLinkClass(isActive)}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main">{children}</main>
    </div>
  );
}
