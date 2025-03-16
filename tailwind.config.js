/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'topbar': '#282828',
    },
    spacing: {
      'max-width': '1140px',
    }
  },
  },
  plugins: [],
}