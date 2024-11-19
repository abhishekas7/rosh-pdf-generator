import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSans: ['NotoSans', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#38465A",
        color2: "#F5F5F5",
        color3: "#CEDDDD",
        "Primary-color-3": "#F0DFC7",
        "Primary-color-5": "#C3C7CE",
        "Primary-color-4": "#F4A525",
        "Neutral-color-2": "#88909C",
        "Neutral-color-7": "#F5F5F5",
        "Neutral-color-6": "#FFF",
        "Secondary-color-1":"#5C8F8C"
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      }
    },
  },
  plugins: [],
};
export default config;
