import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/admin/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/landing/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/catalog/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/cart/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/auth/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
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
