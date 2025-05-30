/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ['var(--font-jetbrains-mono)'],
        'roboto-mono': ['var(--font-roboto-mono)'],
        'rubik': ['var(--font-rubik)'],
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
      },
    },
  },
  plugins: [],
}; 