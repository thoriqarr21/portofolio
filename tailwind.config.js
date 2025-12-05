/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [
    // Gradient text
    "bg-gradient-to-r",
    "from-[#6366f1]",
    "to-[#a855f7]",
    "bg-clip-text",
    "text-transparent",

    // Text colors
    "text-[#e2d3fd]",
    "hover:text-white",

    // Underline animation
    "scale-x-0",
    "scale-x-100",

    // Mobile menu animation
    "max-h-screen",
    "opacity-100",
    "max-h-0",
    "opacity-0",

    // Icon animation
    "rotate-0",
    "rotate-90",
    "scale-100",
    "scale-125",

    // Navbar background
    "bg-[#1D233C]",
    "bg-[#1D233C]/90",
  ],

  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};
