import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00c3e3",
          secondary: "#95d700",
          accent: "#00dac7",
          neutral: "#2e2727",
          "base-100": "#F4F8F2",
          info: "#00e8ff",
          success: "#34ffba",
          warning: "#e95a00",
          error: "#ff9b98",
          body: {
            "background-color": "#F4F8F2",
          },
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
