import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1f2a44',
          blue: '#3b82f6',
          teal: '#14b8a6',
          green: '#22c55e',
          orange: '#f59e0b',
          red: '#ef4444',
          purple: '#8b5cf6',
          gray: '#f3f4f6'
        }
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
