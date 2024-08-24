import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        "primary-100": "#0085ff",
        "primary-200": "#69b4ff",
        "primary-300": "#e0ffff",
        "accent-100": "#006fff",
        "accent-200": "#e0efff",
        "text-100": "#f2f2f2",
        "text-200": "#cecece",
        "text-300": "#b0b0b0",
        "bg-100": "#08101b",
        "bg-200": "#131c2b",
        "bg-300": "#2b3545",
        "bg-card": "#131c2b"
      }

    }
  },
  plugins: []
}
export default config
