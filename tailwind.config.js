import colors from "tailwindcss/colors";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const COLORS = [
  "background",
  "foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
];

/** @param key {String} */
function withOpacity(key) {
  /** @param obj { {opacityValue: string} } */
  return function ({ opacityValue }) {
    const opacity = Number(opacityValue);
    if (isNaN(opacity) || opacity === 1) return `var(--${key})`;
    return `color-mix(in srgb, var(--${key}) ${opacity * 100}%, transparent)`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,json,svelte,ts,tsx}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
      ...COLORS.reduce((obj, key) => {
        obj[key] = withOpacity(`color-${key}`);
        return obj;
      }, {}),
    },
    borderRadius: {
      full: "1000px",
      xl: `calc(var(--border-radius, 0.5rem) + 4px)`,
      lg: `var(--border-radius, 0.5rem)`,
      md: `calc(var(--border-radius, 0.5rem) - 2px)`,
      sm: "calc(var(--border-radius, 0.5rem) - 4px)",
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    addDynamicIconSelectors({ scale: 0 }),
  ],
};
