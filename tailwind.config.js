module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    mode: "all", // because we are using the Typography plugin https://github.com/tailwindlabs/tailwindcss-typography#purging-unused-styles
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{ts,tsx,js,jsx}"],
    //enabled: true, // enable to test purge locally
  },
  theme: {
    extend: {
      colors: {
        primaryGray: "#f1f1f1",
        twitter: "#55acee",
        facebook: "#3b5998",
        youtube: "#c4302b",
        twitch: "#9146FF",
        success: "#587e0e",
        gray: {
          50: "#F4F4F4",
          100: "#F9F9F9",
          200: "#C9C9C9",
          300: "#A9A9A9",
          400: "#2E2E30",
          500: "#282828",
          600: "#242424",
          700: "#161616",
          800: "#121212",
          900: "#0C0C0C",
        },
        blue: {
          50: "#F2F8FE",
          100: "#E6F1FE",
          200: "#BFDBFC",
          300: "#99C6FA",
          400: "#4D9BF7",
          500: "#0070F3",
          600: "#0065DB",
          700: "#004392",
          800: "#00326D",
          900: "#002249",
        },
        red: {
          50: "#FDF5F3",
          100: "#FAECE7",
          200: "#F4CFC4",
          300: "#EDB3A1",
          400: "#DF795A",
          500: "#D5402B",
          600: "#BC3A11",
          700: "#7D260B",
          800: "#5E1D09",
          900: "#3F1306",
        },
      },
    },
  },
  variants: {
    borderWidth: ["responsive, last"],
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [require("@tailwindcss/typography")],
};
