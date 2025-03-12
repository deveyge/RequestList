/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
      }
    },
  },
  plugins: [],
}