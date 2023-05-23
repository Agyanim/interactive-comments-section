/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        ModerateBlue: "hsl(var(--ModerateBlue))",
        SoftRed: "hsl(var(--SoftRed))",
        LightGrayishBlue: "hsl(var(--LightGrayishBlue))",
        PaleRed: "hsl(var(--PaleRed))",
        // Neutral
        DarkBlue: "hsl(var( --DarkBlue))",
        GrayishBlue: "hsl(var( --GrayishBlue))",
        LightGray: "hsl(var(--LightGray))",
        VeryLightGray: "hsl(var(--VeryLightGray))",
        White: "hsl(var(--White))",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
