/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      // "2xlmin": { min: "1535px" },
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { min: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      mt: { max: '425px' },
      ml: { max: '375px' },
      ma: { max: '320px' },
      mr: { max: '275px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
