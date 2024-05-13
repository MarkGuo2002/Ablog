/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#ffdbe7',
          secondary: '#2176c4',
          primaryStrong: '#f14881',
          selectedPrimaryStrong: '#be3865',
          night: {
              100: '#ffffff',
              200: '#ececec',
              300: '#4d4d4d',
              400: '#666',
              500: '#808080',
              600: '#909090',
              700: '#bebebe',
              800: '#212121',
              900: '#171717',
          },
      },
      transitionProperty: {
        'width': 'width'
      },

    },
  },
  plugins: [],
}

