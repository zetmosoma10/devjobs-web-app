/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#5964E0",
        light_violet: "#939BF4",
        very_dark_blue: "#19202D",
        midnight: "#121721",
        white: "#fff",
        light_grey: "#F4F6F8",
        grey: "#9DAEC2",
        dark_grey: "#6E8098",
      },
    },
  },
  plugins: [],
};
