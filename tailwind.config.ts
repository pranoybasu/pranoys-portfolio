import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: "#0a0e27",
          darker: "#060914",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          pink: "#ec4899",
          purple: "#8b5cf6",
        },
        light: {
          cream: "#FAF8F5",
          white: "#FFFFFF",
          'gray-50': "#F9FAFB",
          'gray-100': "#F3F4F6",
          'gray-200': "#E5E7EB",
          'gray-300': "#D1D5DB",
          'gray-600': "#6B7280",
          'gray-700': "#4B5563",
          'gray-800': "#374151",
          'gray-900': "#1F2937",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;