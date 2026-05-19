import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF8F2",
        cream: "#F4EEE3",
        ink: "#161310",
        graphite: "#3A332D",
        mute: "#7C7167",
        hairline: "#E4DCCE",
        terracotta: "#B14A2A",
        clay: "#C66A4C",
        ochre: "#C99244"
      },
      fontFamily: {
        serif: [
          "var(--font-cormorant)",
          "var(--font-noto-serif-jp)",
          "Georgia",
          "serif"
        ],
        sans: [
          "var(--font-inter)",
          "var(--font-noto-sans-jp)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      letterSpacing: {
        widest: "0.28em"
      },
      maxWidth: {
        prose: "68ch"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards"
      }
    }
  },
  plugins: []
};

export default config;
