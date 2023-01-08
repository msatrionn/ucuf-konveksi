/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "java-blue": "#030164",
        "java-blue-200": "#595873",
        "custom-blue-100": "#8ddae3",
      },
    },
  },
  plugins: [],
};
