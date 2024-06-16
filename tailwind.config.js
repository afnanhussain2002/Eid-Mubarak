/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        bounce: "bounce 2s infinite",
        typing: 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
      },
      blink: {
        '50%': { borderColor: 'transparent' },
    },
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-30px)" },
          "60%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
