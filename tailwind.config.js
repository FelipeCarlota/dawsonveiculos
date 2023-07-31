/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        city: "url('./src/assets/img/background-header.jpg')",
        appSection: "url('./src/assets/img/background-breve-app.png')",
        testimonySection: "url('./src/assets/img/background-depoimentos.jpg')"
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

