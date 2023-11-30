import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Headings: ["var(--font-poppins)", "sans-serif"],
      Text: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#F6F6F6",
          200: "#DADCDD",
          300: "#C6C7C8",
          400: "#BABCBD",
          500: "#9A9D9E",
          600: "#78797A",
          700: "#4F5152",
          800: "#2D3235",
          900: "#030E15",
        },
        primary: {
          default: "#653DF5",
          light: "#CCBEFF",
          dark: "#4D1CFF",
        },
      },
      gradientColorStops: {
        "custom-dark": "#00010C",
        "custom-light": "#000107",
      },
    },
  },
  plugins: [],
};
export default config;
