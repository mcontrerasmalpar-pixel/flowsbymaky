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
        cyan: {
          DEFAULT: "#00f5d4",
          dim: "#00c4a8",
          dark: "#007a68",
        },
        bg: {
          DEFAULT: "#050c10",
          2: "#0a141a",
          3: "#0f1e26",
        },
        muted: "#7aa8a0",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
