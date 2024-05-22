/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      dancing: ["Dancing Script"],
    },
    colors: {
      primaryColor: "#00c722",
      bgColor: "#FFFFFF",
      textColor: "#000000",
      secondaryColor: "#C1F2B0",
      highlightColor: "#D0011B",
      thirdColor: "#007336",
      btnColor: "#FFB534",
    },
  },
  plugins: [],
};
