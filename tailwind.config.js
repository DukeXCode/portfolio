/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Orbitron", "monospace"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        neon: {
          black: "#05050a",
          surface: "#0c0c18",
          border: "#1a1a2e",
          text: "#dedeed",
          dim: "#6b6b8a",
          purple: "#a855f7",
          "purple-deep": "#7c3aed",
          cyan: "#22d3ee",
          green: "#34d399",
          red: "#f87171",
          amber: "#fbbf24",
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite alternate",
        "glow-pulse-fast": "glow-pulse 1.5s ease-in-out infinite alternate",
        blink: "blink 1s step-end infinite",
        scanline: "scanline 10s linear infinite",
        float: "float 6s ease-in-out infinite",

        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "grid-scroll": "grid-scroll 20s linear infinite",
        particle: "particle 4s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { opacity: "0.6", filter: "brightness(0.8)" },
          "100%": { opacity: "1", filter: "brightness(1.3)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },

        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        particle: {
          "0%, 100%": { opacity: "0.3", transform: "translateY(0) scale(1)" },
          "50%": { opacity: "1", transform: "translateY(-20px) scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
};
