import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  theme: {
    colors: {
      purple: {
        light: "#CDB4DB", // Light purple main color theme
      },
      khaki: {
        light: "#F0E68C", // Light khaki background
      },
      darkslateblue: {
        DEFAULT: "#483D8B", // Darkslateblue text
      },
      limegreen: {
        DEFAULT: "#32CD32", // Limegreen accent
      },
      hotpink: {
        DEFAULT: "#FF69B4", // Hotpink accent
      },
    },
  },
  variants: {
    extend: {},
  },
});
