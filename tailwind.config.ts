import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#24c4f7",
      },

      container: {
        center: true,
      },
    },
    screens: {
      xs: "100vw",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1000px",
      // '2xl': '1280px',
    },
  },
  prefix: "tw-",
  plugins: [],
};
export default config;
