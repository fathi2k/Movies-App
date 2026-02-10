/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        biruu : '#3B7AB3',
        hijau : '#74E34D',
        primary : '#050229'
      } ,
  },
  plugins: [],
}

}