/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./features/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./app/**/*.{html,js,ts,jsx,tsx,mdx,css}",
    "node_modules/flowbite-react/**/*.{html,js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-486dx": "url('/486DX.webp')",
        "image-laptop": "url('/Laptop-bg.webp')",
      },
      maxWidth: {
        1366: "85.375rem", // *** 1366px
      },
      height: {
        10.5: "2.625rem", // *** 42px ***
        11.25: "2.813rem", // *** 45px ***
        18: "4.5rem", // *** 72px ***
        22.5: "5.625rem", // *** 90px ***
        30: "7.5rem", // *** 120px ***
        49.5: "12.375rem", // *** 198px ***
        69.5: "17.375rem", // *** 278px ***
        77.5: "19.375rem", // *** 310px ***
        89.5: "22.375rem", // *** 358px ***
        94: "23.5rem", // *** 376px ***
        99: "24.75rem", // *** 396px ***
        120: "30rem", // *** 480px ***
        141: "35.25rem", // *** 564px ***
        163.5: "40.875rem", // *** 654px ***
      },
      width: {
        21.75: "5.438rem", // *** 87px ***
        26.75: "6.688rem", // *** 107px ***
        30: "7.5rem", // *** 120px ***
        37.5: "9.375rem", // *** 150px ***
        43.75: "10.938rem", // *** 175px ***
        50: "12.5rem", // *** 200px ***
        75: "18.75rem", // *** 300px ***
        112: "28rem", // *** 448px ***
        113: "28.25rem", // *** 452px ***
        120: "30rem", // *** 480px ***
        130: "32.5rem", // *** 520px ***
        150: "37.5rem", // *** 600px ***
        159: "39.75rem", // *** 636px ***
        160.75: "40.188rem", // *** 643px ***
        175: "43.75rem", // *** 700px ***
        181.5: "45.375rem", // *** 726px ***
        190: "47.5rem", // *** 768px ***
        197.5: "49.375rem", // *** 790px ***
        230: "57.5rem", // *** 920px ***
        300: "75rem", // *** 1200px ***
        1366: "85.375rem", // 1366px - zostaje warunkowo
      },
      colors: {
        yellow: "#F5A22E",
        blue: "#0074F0",
        "light-gray": "#9CA3AF",
        gray: "#222426",
        "dark-gray": "#1B2124E5",
        "dark-red": "#F74746",
        "light-blue": "#1C64F2",
        "almost-black": "#121415",
        "intense-gray": "#1B2124",
        "dry-concrete": "#4B5563",
      },
      leading: {
        7.5: "1.875rem", // *** 30px ***
        16: "4rem", // *** 64px ***
      },
      fontSize: {
        4.5: "1.125rem", // *** 18px ***
        5: "1.25rem", // *** 20px ***
        13.5: "3.375rem", // *** 64px ***
      },
      lineHeight: {
        6.75: "1.688rem", // *** 27px ***
        7.5: "1.875rem", // *** 30px ***
        16: "4rem", // *** 54px ***
      },
      spacing: {
        10.25: "2.563rem", // *** 41px ***
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
