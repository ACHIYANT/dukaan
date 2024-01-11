// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "var(--color-secondary)",
        secondaryCredits: "var(--color-secondaryCredits)",
        black12: "var(--black12)",
        black30: "var(--black30)",
        black98: "var(--black98)",
        black85: "var(--black85)",
        primaryBlue: "var(--color-primary-blue)",
        hoverBlue: "var(--color-hover-blue)",
        black95: "var(--black95)",
        black50: "var(--black50)",
        black60: "var(--black60)",
      },
      fontSize:{
        smh:"0.9375rem",
        xsl:"0.8125rem",
        px32: "2rem",
      },
      lineHeight:{
        smh:"1.375rem",
        l38:"2.375rem",
      },
      height:{
        nfull:"min(100%,882px)"
      },
      boxShadow:{
        cardShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"
      },
      borderRadius:{
        tranbtn: "40px",
      }
    },
  },
  plugins: [],
}