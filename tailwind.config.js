/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        // optional custom screens to match the assignment sizes
        screens: {
          xs: "480px",   // Mobile
          tab: "720px",  // Tablet
          fhd: "1080px", // 1080p
          mac: "1440px", // MacBook
          ipad: "2048px" // Large iPad width (good for 2732×2048)
        }
      }
    },
    plugins: []
  };
  