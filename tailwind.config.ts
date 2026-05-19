import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🐱 Metagen TX-inspired warm biotech palette
        sand: "#EBE7E1",
        sandLight: "#F4F1EB",
        sandDeep: "#DDD7CC",
        bark: "#44362D",
        barkSoft: "#6B5A4E",
        barkMute: "#9B8C7E",
        line: "#D9D2C5",
        orange: "#E86200",
        ember: "#E8431F",
        gold: "#F4A41D",
        teal: "#016352",
        tealDeep: "#024A3D",
        ivory: "#FBF8F2"
      },
      fontFamily: {
        sans: [
          "var(--font-zen-kaku)",
          "var(--font-rubik)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "var(--font-rubik)",
          "var(--font-zen-kaku)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "var(--font-cormorant)",
          "Georgia",
          "serif"
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.22em"
      },
      borderRadius: {
        pill: "9999px",
        soft: "14px",
        chunk: "22px"
      },
      boxShadow: {
        soft: "0 12px 36px -16px rgba(68,54,45,0.18)",
        ring: "0 0 0 1px rgba(68,54,45,0.08)"
      },
      maxWidth: {
        prose: "68ch"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards",
        marquee: "marquee 38s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
