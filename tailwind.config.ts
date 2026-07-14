import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        portfolio: {
          color1: "#1A120B",
          color2: "#3C2A21",
          color3: "#D5CEA3",
          color4: "#E5E5CB",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],

        mono: [
          "JetBrains Mono",
          "Courier New",
          "monospace",
        ],
      },

      boxShadow: {
        portfolio:
          "0 10px 30px rgba(26,18,11,0.12)",
      },

      transitionDuration: {
        400: "400ms",
      },
    },
  },

  plugins: [],
};

export default config;