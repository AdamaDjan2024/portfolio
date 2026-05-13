/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Navy/Slate 950
        "navy-shadow": "rgba(2, 12, 27, 0.7)",
        lightest: "#f8fafc", // Slate 50
        light: "#e2e8f0", // Slate 200
        slate: "#94a3b8", // Slate 400
        darkslate: "#475569", // Slate 600
        accent: {
          DEFAULT: "#5eead4", // Teal 300
          hover: "rgba(94, 234, 212, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
