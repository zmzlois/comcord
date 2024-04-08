import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderColor: {
        DEFAULT: "hsl(var(--border) / <alpha-value>)",
      },
      colors: {
        border: "hsl(var(--border)/ <alpha-value>) ",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring)/ <alpha-value>) ",
        background: "hsl(var(--background)/ <alpha-value>) ",
        foreground: "hsl(var(--foreground) / <alpha-value>) ",
        primary: {
          DEFAULT: "hsl(var(--primary)/ <alpha-value>) ",
          foreground: "hsl(var(--primary-foreground)/ <alpha-value>) ",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary)/ <alpha-value>) ",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive)/ <alpha-value>) ",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted)/ <alpha-value>) ",
          foreground: "hsl(var(--muted-foreground)/ <alpha-value>) ",
        },
        accent: {
          DEFAULT: "hsl(var(--accent)/ <alpha-value>) ",
          foreground: "hsl(var(--accent-foreground)/ <alpha-value>) ",
        },
        popover: {
          DEFAULT: "hsl(var(--popover)) / <alpha-value>",
          foreground: "hsl(var(--popover-foreground)) / <alpha-value>",
        },
        card: {
          DEFAULT: "hsl(var(--card)) / <alpha-value>",
          foreground: "hsl(var(--card-foreground)) / <alpha-value>",
        },
        blurple: {
          DEFAULT: "hsl(var(--blurple) / <alpha-value>)",
        },
        mauve: {
          DEFAULT: "hsl(var(--mauve) / <alpha-value>)",
        },
        "persian-pink": {
          DEFAULT: "hsl(var(--persian-pink) / <alpha-value>)",
        },
        "brink-pink": {
          DEFAULT: "hsl(var(--brink-pink) / <alpha-value>)",
        },
        "baby-purple": {
          DEFAULT: "hsl(var(--baby-purple) / <alpha-value>)",
        },
        "dark-charcoal": {
          DEFAULT: "hsl(var(--dark-charcoal) / <alpha-value>)",
        },
        onyx: {
          DEFAULT: "hsl(var(--onyx) / <alpha-value>)",
        },
        "nebula-blue": {
          DEFAULT: "hsl(var(--nebula-blue) / <alpha-value>)",
        },
        "cadet-gray": {
          DEFAULT: "hsl(var(--cadet-gray) / <alpha-value>)",
        },
        "antiflash-white": {
          DEFAULT: "hsl(var(--antiflash-white) / <alpha-value>)",
        },
        "smoky-black": {
          DEFAULT: "hsl(var(--smoky-black) / <alpha-value>)",
        },
        bluetiful: {
          DEFAULT: "hsl(var(--bluetiful) / <alpha-value>)",
        },

        "accent-1": {
          DEFAULT: "hsl(var(--accent-1) / <alpha-value>)",
        },
        burgundy: {
          DEFAULT: "hsl(var(--burgundy) / <alpha-value>)",
        },
        "desert-sun": {
          DEFAULT: "hsl(var(--desert-sun) / <alpha-value>)",
        },
        "discord-black": {
          DEFAULT: "hsl(var(--discord-black) / <alpha-value>)",
        },
        fefefe: {
          DEFAULT: "hsl(var(--fefefe) / <alpha-value>)",
        },
      },
      boxShadow: {
        2: "0 35px 60px -15px rgba(0, 200, 90, 0.3)",
      },
      boxShadowColor: {
        lightemerald: "#21A193",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        cal: ["var(--font-cal)", ...fontFamily.sans],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "face-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        blob: {
          "0%": {
            translate: "0 0",
            rotate: "0deg",
          },
          "30%": {
            rotate: "40deg",
          },
          "50%": {
            transform: "translate(500px, 750px) scale(1.3)",
          },
          "80%": {
            rotate: "90%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s",
        "fade-in": "fade-in 1s",
        "fade-down": "fade-down 0.5s",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 10s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        "blob-reverse":
          "blob 15s infinite cubic-bezier(0.215, 0.61, 0.355, 1) reverse",
        "conic-slow": "spin 10s conic infinite",
        "pulse-slow": "pulse 6s linear infinite",
        "typing": "typing 1s steps(40) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
