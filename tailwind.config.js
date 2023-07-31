/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
    './src/**/*.{html,js}',
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        city: "url('./public/background-header.jpg')",
        appSection: "url('./public/background-breve-app.png')",
        testimonySection: "url('./public/background-depoimentos.jpg')"
      },

      backgroundColor: {
        orange: "#ff9000",
        secondary: "#1b1b1b"
      },

      colors: {
        primary: "#ff9000",
        secondary: "#1b1b1b"
      },

      fontFamily: {
        maximize: ['MaximizeFontCustom', 'sans'],
      }
    },
  },
  variants: {
    extends: {}
  },

  plugins: [],
}

