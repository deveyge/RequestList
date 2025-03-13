/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
          'primary': 'var(--primary)',
          'accent': 'var(--accent)'
      },
  }
  },
  plugins: [],
}