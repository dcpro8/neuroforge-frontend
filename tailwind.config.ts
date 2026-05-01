import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        primary: "#00ffcc",
        secondary: "#00ffff",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,255,204,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;