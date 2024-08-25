/** @type {import('tailwindcss').Config} */
const generateHeightMap = () => {
  const height = {};
  for (let i = 1; i <= 1920; i++) {
    height[`${i}px`] = `${i}px`;
    height[`${i}vh`] = `${i}vh`;
  }
  return height;
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '426px', // Custom breakpoint for 360px and above
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        // digital-markting
        'top-nav-color': '#33315E',
        'heading-color': '#0E0E0E',
        'text-color': '#383838',
        'orange-color': '#EA7932',
        'green-color': '#3DDDA0',
        'blue-hover-color': '#219DC5',
        'blue-navi-color': '#1D1B4C',
        // digital-markting
        primary: '#013966',
        secondary: '#004C89',
        'medium-sky-blue': '#6CACDF',
        'blue-button-color': '#0064B4',
        cancel: '#BB203C',
        'light-red': '#B4828B',
        'light-pink': '#B4818B',
        'light-sky-blue': '#CAE8FF',
        'light-gray': '#E0DFDF',
        'lighter-gray': '#E7E7E7',
        'bright-sky-blue': '#7EC6FF',
        'repeat-medium-sky-blue': '#6CACDF',
        gray: '#B5B5B5',
        'li-gray': '#F2F2F2',
      },
      fontSize: (() => {
        const fontSize = {};
        for (let i = 1; i <= 1000; i++) {
          fontSize[`${i}px`] = `${i}px`;
        }
        return fontSize;
      })(),
      // fontWeight: (() => {
      //  const fontWeight = {};
      //  for (let i = 1; i <= 1000; i++) {
      //   fontWeight[`${i}px`] = `${i}px`;
      //  }
      //  return fontWeight;
      // })(),

      fontWeight: (() => {
        const fontWeight = {};
        for (let i = 1; i <= 1000; i++) {
          fontWeight[`${i}px`] = `${i}px`;
        }
        return fontWeight;
      })(),

      // font-thin: font-weight: 100;
      // font-extralight: font-weight: 200;
      // font-light: font-weight: 300;
      // font-normal: font-weight: 400;
      // font-medium: font-weight: 500;
      // font-semibold: font-weight: 600;
      // font-bold: font-weight: 700;
      // font-extrabold: font-weight: 800;
      // font-black: font-weight: 900;

      margin: (() => {
        const margins = {};
        for (let i = 1; i <= 1000; i++) {
          margins[`${i}px`] = `${i}px`;
        }
        return margins;
      })(),
      padding: (() => {
        const padding = {};
        for (let i = 1; i <= 1000; i++) {
          padding[`${i}px`] = `${i}px`;
        }
        return padding;
      })(),
      width: (() => {
        const width = {};
        for (let i = 1; i <= 1920; i++) {
          width[`${i}px`] = `${i}px`;
        }
        return width;
      })(),
      height: generateHeightMap(),
    },
  },
  plugins: [],
};
