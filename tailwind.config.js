/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#264654",
        gold: "#ffdb9e",
        lightblue: "#e6f7ff",
        mediumdarkblue: "#036896",
        sandy: "#c4ccd7",
        overlay: "rgba(0, 0, 0, 0.5)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    keyframes: {
      float: {
        "0%": {
          transform: "translatey(0px) rotate(45deg)",
        },
        "50%": {
          transform: "translatey(-20px) rotate(45deg)",
        },
        "100%": {
          transform: "translatey(0px) rotate(45deg)",
        },
      },
      fadeInUp: {
        from: {
          transform: "translatey(40px)",
          opacity: 0,
        },
        to: {
          transform: "translatey(0,)",
          opacity: 1,
        },
      },
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      float: "float 4s ease-in-out infinite",
      fadeInUp: "fadeInUp 1s",
      spin: "spin 1s linear infinite",
    },
    boxShadow: {
      nav: "0px 3px 8px 0px rgba(94, 95, 99, 0.88)",
    },
  },
  plugins: [],
};
