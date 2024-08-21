/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        vt323: ["VT323", "monospace"],
      },
      backgroundImage: {
        ubuntu: "url('/src/assets/ubuntu.jpg')",
        ubuntuApp: "url('/src/assets/ubuntu-terminal-icon.png')",
      },
    },
  },
  plugins: [],
};
