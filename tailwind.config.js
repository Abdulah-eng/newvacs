/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#13314f',
        navydark: '#0d2138',
        teal: '#0d9488',
        flagred: '#dc2626',
        flagamber: '#ca8a04',
        purplex: '#7c3aed',
        cyanx: '#0891b2',
      },
      fontFamily: {
        head: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        body: ['Calibri', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
