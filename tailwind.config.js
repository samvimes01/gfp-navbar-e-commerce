/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "foc": "0 0 0 4px rgba(68,76,231,0.12)",
      },
    },
  },
  plugins: [],
};

