/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        mist: '#e2e8f0',
        surface: '#f8fafc',
        brand: '#5b6cf8',
        brandDark: '#4338ca',
        accent: '#14b8a6',
        glow: '#f472b6',
      },
      boxShadow: {
        panel: '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
