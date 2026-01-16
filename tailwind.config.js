/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0c0c0c',
        'neon-pink': '#ec4899',
        'neon-green': '#22c55e',
        'neon-blue': '#3b82f6',
      },
    },
  },
  plugins: [],
}
