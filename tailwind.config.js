/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
          'primary': 'var(--primary)',
          'accent': 'var(--accent)',
          'form': 'var(--form)',
          'input': 'var(--input)',
          'secondary': 'var(--secondary)',
          'bg-primary': 'var(--bg-primary)',
      },
  }
  },
  plugins: [],
}