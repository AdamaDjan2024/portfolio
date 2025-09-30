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
        primary: {
          900: "#001B4B",
          700: "#02457A",
          500: "#018ABE",
          300: "#97CADB",
          100: "#D6E8EE",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-10px) translateX(5px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        typing: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        typing: "typing 0.05s forwards", // vitesse par lettre rapide
      },
    },
  },
  plugins: [],
};
