/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'arial'],
        robotoSerif: ['RobotoSerif', 'serif'],
      },
      colors: {
        bgDark: 'var(--bg-color-dark)',
        textPrimary: 'var(--text-color)',
        headerText: 'var(--header-text-color)',
        'mono-50': '#fbfbfb',
        'mono-100': '#f7f7f7',
        'mono-200': '#ebebeb',
        'mono-300': '#dcdcdc',
        'mono-400': '#b2b2b2',
        'mono-500': '#808080',
        'mono-600': '#636363',
        'mono-700': '#515151',
        'mono-800': '#3f3f3f',
        'mono-900': '#2e2e2e',
        logoBlue: '#38b6ff',
      },
    },
  },
  plugins: [],
}
