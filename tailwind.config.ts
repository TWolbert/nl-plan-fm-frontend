import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background": "#EFEDED",
        "pink": "#FF5E5E",
      },
      boxShadow: {
        "navbar": "0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
      borderRadius: {
        "4xl": "50px",
      },
      height: {
        "600": "600px",
      }
    },
  },
  plugins: [],
};
export default config;
