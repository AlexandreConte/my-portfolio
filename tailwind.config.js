/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg_image": "url('./public/background.jpg')",
      },
    },
  },
  plugins: [],
}
