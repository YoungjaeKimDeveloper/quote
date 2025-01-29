/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /opacity-(0|100)/ }, // opacity-0, opacity-100 유지
    { pattern: /bg-gradient-.*/ }, // gradient 관련 클래스 유지
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
