import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#011627",
        main_color: '#607B96',
        custom_orange: '#FEA55F',
        custom_purple: '#4D5BCE',
        custom_green: '#43D9AD',
        custom_pale_orange: '#E99287',
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
