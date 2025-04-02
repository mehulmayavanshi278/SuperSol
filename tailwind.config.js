/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
      "./docs/**/*.{md,mdx}",
      "./blog/**/*.{md,mdx}",
    ],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
  
      extend: {
        animation: {
          "shimmer-slide":
            "shimmer-slide var(--speed) ease-in-out infinite alternate",
          "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        },
        keyframes: {
          "spin-around": {
            "0%": {
              transform: "translateZ(0) rotate(0)",
            },
            "15%, 35%": {
              transform: "translateZ(0) rotate(90deg)",
            },
            "65%, 85%": {
              transform: "translateZ(0) rotate(270deg)",
            },
            "100%": {
              transform: "translateZ(0) rotate(360deg)",
            },
          },
          "shimmer-slide": {
            to: {
              transform: "translate(calc(100cqw - 100%), 0)",
            },
          },
        },
        colors: {
          primary: {
            DEFAULT: "#1AC8FC",
            dark: "#0ebaed",
            darker: "#0bb0e1",
            darkest: "#0991b9",
            light: "#36cffc",
            lighter: "#44d2fd",
            lightest: "#6fdbfd",
          },
          background: {
            light: "#FFFFFF",
            dark: "#0D0E14",
          },
        },
      },
    },
    plugins: [],
    corePlugins: {
      preflight: false, // Disable Tailwind's reset to avoid conflicts with Docusaurus
    },
    // Enable important to override Docusaurus styles
    important: true,
  }