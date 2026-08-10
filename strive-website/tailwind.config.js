/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          light: '#22c55e',
        },
        secondary: {
          DEFAULT: '#22c55e',
          light: '#4ade80',
          dark: '#16a34a',
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#eab308',
          dark: '#ca8a04',
        },
        background: '#ffffff',
        surface: {
          DEFAULT: '#f8fafc',
          muted: '#f1f5f9',
          card: '#ffffff',
        },
        dark: '#0f172a',
        text: {
          DEFAULT: '#111827',
          muted: '#4b5563',
          light: '#9ca3af',
        },
      },
      borderRadius: {
        card: '20px',
        xl2: '24px',
        xl3: '32px',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        glow: '0 0 25px rgba(5, 150, 105, 0.15)',
        'emerald-sm': '0 4px 20px -2px rgba(5, 150, 105, 0.2)',
        'emerald-lg': '0 20px 40px -15px rgba(5, 150, 105, 0.25)',
        'gold-lg': '0 20px 40px -15px rgba(245, 158, 11, 0.25)',
      },
    },
  },
  plugins: [],
}
