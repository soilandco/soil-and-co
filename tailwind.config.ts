import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F2',
          soft: '#F1EDE2',
        },
        brand: {
          moss: '#5B6E46',
          'moss-light': '#E1E6D2',
          green: '#3E6B4F',
          'green-light': '#DCE8DA',
          navy: '#1F2A38',
          'navy-light': '#3C4C5E',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(31, 42, 56, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
