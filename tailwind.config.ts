import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#cfb673",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#cfb673",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "rgba(0, 0, 0, 0.5)",
          foreground: "#ffffff",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "gradient-animation": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "particles": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(100px, -100px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        "glow": {
          "0%": {
            opacity: "0.5",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: "0.5",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "gradient": "gradient-animation 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "particles": "particles 8s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-animated": "linear-gradient(-45deg, #000000 0%, #cfb673 50%, #000000 100%)",
      },
      cursor: {
        none: "none",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;