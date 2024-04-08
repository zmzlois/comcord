import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
    darkMode: ["class"],
    content: [
        "src/**/*.{ts,tsx}",
        "components/**/*.{ts,tsx}",
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"],
    theme: {
        transparent: "transparent",
        current: "currentColor",
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
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
                    foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted) / <alpha-value>)",
                    foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
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
                popover: {
                    DEFAULT: "hsl(var(--popover) / <alpha-value>)",
                    foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "hsl(var(--card) / <alpha-value>)",
                    foreground: "hsl(var(--card-foreground) / <alpha-value>)",
                },
                tremor: {
                    brand: {
                        faint: "#eff6ff", // blue-50
                        muted: "#bfdbfe", // blue-200
                        subtle: "#60a5fa", // blue-400
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#1d4ed8", // blue-700
                        inverted: "#ffffff", // white
                    },
                    background: {
                        muted: "#f9fafb", // gray-50
                        subtle: "#f3f4f6", // gray-100
                        DEFAULT: "#ffffff", // white
                        emphasis: "#374151", // gray-700
                    },
                    border: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    ring: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    content: {
                        subtle: "#9ca3af", // gray-400
                        DEFAULT: "#6b7280", // gray-500
                        emphasis: "#374151", // gray-700
                        strong: "#111827", // gray-900
                        inverted: "#ffffff", // white
                    },
                },
                // dark mode
                "dark-tremor": {
                    brand: {
                        faint: "#0B1229", // custom
                        muted: "#172554", // blue-950
                        subtle: "#1e40af", // blue-800
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#60a5fa", // blue-400
                        inverted: "#030712", // gray-950
                    },
                    background: {
                        muted: "#131A2B", // custom
                        subtle: "#1f2937", // gray-800
                        DEFAULT: "#111827", // gray-900
                        emphasis: "#d1d5db", // gray-300
                    },
                    border: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    ring: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    content: {
                        subtle: "#4b5563", // gray-600
                        DEFAULT: "#6b7280", // gray-500
                        emphasis: "#e5e7eb", // gray-200
                        strong: "#f9fafb", // gray-50
                        inverted: "#000000", // black
                    },
                },
            },
            boxShadow: {
                2: "0 35px 60px -15px rgba(0, 200, 90, 0.3)",
                // light
                "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                // dark
                "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            },
            boxShadowColor: {
                lightemerald: "#21A193",
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
                "tremor-small": "0.375rem",
                "tremor-default": "0.5rem",
                "tremor-full": "9999px",
            },
            fontSize: {
                //"tremor-label": ["0.75rem"],
                "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
                "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
                "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
            },
            fontFamily: {
                cal: ["var(--font-cal)", ...fontFamily.sans],
                sans: ["var(--font-sans)", ...fontFamily.sans],
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
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
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
            },
        },
    },
    safelist: [
        {
            pattern:
                /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern:
                /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern:
                /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
    ],
    plugins: [],
} satisfies Config;