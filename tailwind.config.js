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
      },
      fontFamily: {
        noto: ["Noto Sans"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
