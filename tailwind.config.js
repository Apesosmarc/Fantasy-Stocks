module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        btnPrimary: "var(--color-btn-primary)",
      },
      borderColor: {
        primary: "var(--color-border-primary)",
        secondary: "var(--color-border-secondary)",
      },
      text: {
        primary: "var(--color-text-primary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
