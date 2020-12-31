module.exports = {
  purge: { enable: false, content: ["./public/**/*.html", "./src/**/*.tsx"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          350: "#BDBDBD",
          450: "#828282",
          750: "#333333",
        },
        blue: {
          550: "#2F80ED",
        },
      },
      spacing: {
        120: "460px",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
      },
      fontFamily: {
        noto: ["Noto Sans"],
      },
      gridTemplateColumns: {
        info: "150px auto",
        "info--moblie": "100px auto",
      },
      gridTemplateRows: {
        info: "repeat(6, minmax(60px, auto))",
      },
      zIndex: {
        "-10": -10,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundOpacity: ["active"],
      borderColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
