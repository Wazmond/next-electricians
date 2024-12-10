/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        bgDark: 'var(--bg-color-dark)',
        textPrimary: 'var(--text-color)',
        headerText: 'var(--header-text-color)',
      },
    },
  },
  plugins: [],
}

