/** @type {import('tailwindcss').Config} */
module.exports = {
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
          selectedPrimaryStrong: '#be3865'
      },
      transitionProperty: {
        'width': 'width'
      },

    },
  },
  plugins: [],
}

