/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0071e3',
        dark: {
          100: '#86868b',
          200: '#2e2e30',
        },
        light: {
          100: '#adb5bd',
        },
      },
      fontFamily: {
        regular: ['Regular', 'ui-sans-serif', 'system-ui'],
        medium: ['Medium', 'ui-sans-serif', 'system-ui'],
        semibold: ['SemiBold', 'ui-sans-serif', 'system-ui'],
        bold: ['Bold', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

