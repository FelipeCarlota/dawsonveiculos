/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,tsx,jpg,png}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        city: "url('./src/img/background-header.jpg')",
        appSection: "url('./src/img/background-breve-app.png')",
        testimonySection: "url('./src/img/background-depoimentos.jpg')"
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

