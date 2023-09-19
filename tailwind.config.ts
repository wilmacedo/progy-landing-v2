import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EA",
        secondary: "#1d1e20",

        border: "#e4e4e7",
        accent: "#f6f7f9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "button-gradient": "linear-gradient(180deg,#31353d,#1d1e20)",
        "button-primary-gradient": "linear-gradient(180deg, #3c82f5, #2563EA)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      });
    }),
  ],
};
export default config;
