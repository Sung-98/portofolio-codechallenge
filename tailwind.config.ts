import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#0e153a',
        dark: '#0f172a',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
} satisfies Config;
