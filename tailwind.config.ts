import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          cream: "#f5efe0",
          "cream-soft": "#faf6ec",
          "cream-deep": "#ede4d0",
          ink: "#1a1a1a",
          "ink-soft": "#3d3936",
          forest: "#2f4d3f",
          "forest-light": "#4a7d68",
          walnut: "#6b4423",
          "walnut-light": "#8f6b3f",
          rule: "#c9bfa5",
        },
      },
      fontFamily: {
        'raleway': ['var(--font-raleway)', 'Raleway', 'sans-serif'],
        'cinzel': ['var(--font-cinzel)', 'Cinzel', 'serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;