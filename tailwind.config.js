module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        portfolioTheme: {
          primary: "#15133C",
          secondary: "#EC994B",
          accent: "#73777B",
          neutral: "#F1EEE9",
          "base-100": "#080818",
        },
      },
    ],
  },
};
