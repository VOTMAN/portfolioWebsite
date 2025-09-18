module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,astro}", // make sure Astro is included
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // ✅ required by react-bits
  ],
};
