/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ebe5',
          200: '#cbd8cb',
          300: '#a7bfa7',
          400: '#7f9f7f',
          500: '#618361',
          600: '#4c694c',
          700: '#3d533d',
          800: '#334333',
          900: '#2b382b',
        },
        warm: {
          50: '#faf8f5',
          100: '#f4eee6',
          200: '#e8dcce',
          300: '#d7c2ac',
          400: '#c3a386',
          500: '#b48c69',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
