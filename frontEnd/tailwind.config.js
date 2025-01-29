/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["opacity-0", "opacity-100", "transition-opacity", "duration-500"],
  theme: {
    extend: {},
  },
  plugins: [],
};
