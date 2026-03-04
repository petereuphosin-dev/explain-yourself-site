/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        panel: "0 24px 70px rgba(5, 10, 22, 0.45)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 18px 40px rgba(37, 99, 235, 0.22)"
      },
      colors: {
        ink: "#070B14",
        mist: "#D5E7FF",
        ember: "#F97316",
        cyanflash: "#22D3EE"
      },
      backgroundImage: {
        "noise-fine":
          "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08) 0, transparent 18%), radial-gradient(circle at 85% 25%, rgba(34,211,238,0.12) 0, transparent 22%), radial-gradient(circle at 35% 85%, rgba(249,115,22,0.1) 0, transparent 20%)"
      },
      fontFamily: {
        display: ['"Arial Black"', '"Franklin Gothic Heavy"', '"Trebuchet MS"', "sans-serif"],
        body: ['"Avenir Next"', '"Segoe UI"', '"Trebuchet MS"', "sans-serif"]
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -18px, 0) scale(1.03)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 211, 238, 0.25)" },
          "50%": { boxShadow: "0 0 0 10px rgba(34, 211, 238, 0)" }
        },
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.8s ease-out infinite",
        rise: "rise 700ms ease-out both"
      }
    }
  },
  plugins: []
};
