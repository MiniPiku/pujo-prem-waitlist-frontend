/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow': '#FFFF00',
        'neon-green': '#00FF00',
        'brutal-black': '#000000',
        'brutal-white': '#FFFFFF',
        'brutal-red': '#FF0000',
        'brutal-blue': '#0000FF',
        'brutal-pink': '#FF00FF',
        'brutal-cyan': '#00FFFF',
        'brutal-orange': '#FF8000',
        'brutal-purple': '#8000FF',
        'brutal-gray': '#808080',
        'brutal-dark-gray': '#404040',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'brutal': ['Impact', 'Arial Black', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-yellow': '8px 8px 0px 0px #FFFF00',
        'brutal-red': '8px 8px 0px 0px #FF0000',
        'brutal-blue': '8px 8px 0px 0px #0000FF',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}
