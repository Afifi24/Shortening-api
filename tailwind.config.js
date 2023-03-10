/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        widthmd:['var(--container-width-md)'],
        widthsm:['var(--container-width-sm)'],
        widthxs:['var(--container-width-xs)']
      },
      fontFamily:{
        Poppins:['Poppins'],
      },
      colors:{
       Violet : ['var(--Dark-Violet)'],
       Gray : ['var(--Gray)'],
      },
      backgroundColor:{
        Cyan: ['var(--Dark-Violet)'],
       
      }
    },
  },
  plugins: [],
}
