const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        vais: {
          pri: "#0f7bb4",
          sec: "#054465",
          off: "#F2EFEC",
        },
      },
      animation: {
        marquee: "marquee 150s linear infinite",
        marquee2: "marquee2 150s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
    container: {
      // you can configure the container to be centered
      // or have default horizontal padding
      padding: {
        sm: "0.1rem",
        md: "1rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      // default breakpoints but with 40px removed
      //
      // notice how the color changes at 768px but
      // the container size changes at 728px
      screens: {
        sm: "600px",
        md: "728px",
        lg: "728px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
  },
  plugins: [require("tailwindcss-dotted-background")],
};
