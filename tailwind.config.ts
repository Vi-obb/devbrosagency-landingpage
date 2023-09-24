import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {
      backgroundColor: {
        dark: "#0E0E0D", // Replace with your desired background color
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#DB712A",
        offprimary: "#E5E2E0",
        dark: "#0E0E0D",
      },
    },
  },
  plugins: [],
};
export default config;
