import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:   "#0B1F33",
        teal:   "#1FA3A3",
        silver: "#D9E1E8",
        lime:   "#A7D129",
        mist:   "#F4F7F9",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body:    ["Open Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
