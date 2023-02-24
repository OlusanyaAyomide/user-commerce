/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       extend: {
//         colors: {
//           emerald: "#10b981",
//           fuchsia: "#a21caf",
//           "th-background": "var(--background)",
//           "th-background-secondary": "var(--background-secondary)",
//           "th-foreground": "var(--foreground)",
//           "th-primary-dark": "var(--primary-dark)",
//           "th-primary-medium": "var(--primary-medium)",
//           "th-primary-light": "var(--primary-light)",
//           "th-accent-dark": "var(--accent-dark)",
//           "th-accent-medium": "var(--accent-medium)",
//           "th-accent-light": "var(--accent-light)",
//         },
//       },
//     },
//     plugins: [],
//   },
// };
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg-main": "var(--background-light)",
        "bg-sec": "var(--background-secondary)",
        dominant: "var(--dominant)",
        "thick-text": "var(--text-thick)",
        "normal-text": "var(--text-normal)",
        inpadding: "var(--inpadding)",
        overlay: "var(--overlay)",
        inputvar: "var(--inputvar)",
        thickoverlay: "var(--thickoverlay)",
      },
      fontFamily: {
        noto: ["Noto Sans Symbols", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        dancing: ["Dancing Script", "cursive", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
