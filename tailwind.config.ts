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
        "main-bg": "url('/bulb.jpg')",
        "leaderboard-bg": "url('/ai.png')",
      },
      backgroundSize: {
        "full-cover": "cover",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
