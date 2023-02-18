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
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: "#10b981",
        fuchsia: "#a21caf",
        "th-background": "var(--background)",
        "th-background-secondary": "var(--background-secondary)",
        "th-foreground": "var(--foreground)",
        "th-primary-dark": "var(--primary-dark)",
        "th-primary-medium": "var(--primary-medium)",
        "th-primary-light": "var(--primary-light)",
        "th-accent-dark": "var(--accent-dark)",
        "th-accent-medium": "var(--accent-medium)",
        "th-accent-light": "var(--accent-light)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
