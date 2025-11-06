import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#313647',
        secondary: '#435663',
        accent: '#A3B087',
        background: '#FFF8D4',
        'light-gray': '#F3F4F6',
      },
      boxShadow: {
        'glow-accent': '0 0 15px 5px rgba(159, 122, 234, 0.4)',
        'glow-purple': '0 0 15px 5px rgba(159, 122, 234, 0.4)',
      },
    },
  },
  plugins: [
    typography,
  ],
}