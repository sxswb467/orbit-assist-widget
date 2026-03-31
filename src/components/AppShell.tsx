import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/playground', label: 'Playground' },
  { to: '/design-system', label: 'Design System' },
];

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen text-slate-100">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-white no-underline">
            <motion.div
              layout
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-glow shadow-panel"
            >
              <span className="text-lg font-black">OA</span>
            </motion.div>
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio Demo</div>
              <div className="text-lg font-semibold">Orbit Assist</div>
            </div>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-white text-slate-950'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
    </div>
  );
}
