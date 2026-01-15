/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};


