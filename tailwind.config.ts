import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          navy: "#0E1B2C",
          soft: "#2A3A4E",
        },
        paper: {
          cream: "#E8DFCC",
          deep: "#DCD2BC",
        },
        mist: {
          white: "#F7F4EE",
        },
        water: { indigo: "#2D4A6B" },
        sky: { blue: "#5A7A99" },
        fire: { ember: "#B85C44" },
        earth: { ochre: "#C89B5C" },
        forest: { green: "#2E4D3C" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-noto-serif-jp)", "Hiragino Mincho ProN", "serif"],
        jp: ["var(--font-noto-serif-jp)", "Hiragino Mincho ProN", "serif"],
        jpsans: ["var(--font-noto-sans-jp)", "Hiragino Sans", "sans-serif"],
      },
      fontWeight: {
        display: "800",
        jpdisplay: "700",
        jpbody: "500",
      },
      letterSpacing: {
        tight: "-0.025em",
        label: "0.18em",
      },
      lineHeight: {
        display: "1.2",
        body: "1.6",
      },
      maxWidth: {
        container: "1280px",
        prose: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
