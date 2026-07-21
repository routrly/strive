/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#166534',
        secondary: '#22c55e',
        accent: '#d4af37',
        background: '#ffffff',
        surface: '#f8fafc',
        text: '#111827',
      },
      borderRadius: {
        card: '24px',
      },
    },
  },
  plugins: [],
}
