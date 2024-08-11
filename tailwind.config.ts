import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-rose": 'linear-gradient(to right, #E17AFE, #9BAAFF)',
        "gradient-silver": "linear-gradient(to right, #be123c, #fb7185)",
        "gradient-gold": "linear-gradient(to right, #0f766e, #34d399)"
      },
      fontFamily: {
        signature: ['Dancing Script', 'cursive'],
        heading: ['Playfair Display', 'serif'],
        description: ['Lato', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        rose: {
          "primary": "#4a00ff",
          "primary-content": "#ffffff",
          "secondary": "#f6d860",
          "secondary-content": "#f6d860",
          "accent": "#37cdbe",
          "accent-content": "#37cdbe",
          "neutral": "#3d4451",
          "neutral-content": "#3d4451",
          "base-100": "#ffffff",
          "base-content": "#333333",
          "info": "#3d4451",
          "info-content": "#3d4451",
        },
        gold: {
          "primary": "#0f766e",
          "primary-content": "#ffffff",
          "secondary": "#34d399",
          "secondary-content": "#ffffff",
          "accent": "#1e3a8a",
          "accent-content": "#ffffff",
          "neutral": "#4b5563",
          "neutral-content": "#ffffff",
          "base-100": "#f0fdf4",
          "base-content": "#1f2937",
          "info": "#2563eb",
          "info-content": "#ffffff"
        },
        silver: {
          "primary": "#be123c",
          "primary-content": "#ffffff",
          "secondary": "#fb7185",
          "secondary-content": "#ffffff",
          "accent": "#a21caf",
          "accent-content": "#ffffff",
          "neutral": "#374151",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-content": "#1e293b",
          "info": "#3b82f6",
          "info-content": "#ffffff"
        },
      },
      "dark",
      "cupcake",
      "light",
      "cyberpunk"
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
