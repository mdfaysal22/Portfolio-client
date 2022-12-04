/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {

    themes: [
      {
        
        mytheme: {

          "primary": "#70ba65",

          "secondary": "#252734",
          "info":"#2A2C39"
        },
      }
    ],
  }

}
