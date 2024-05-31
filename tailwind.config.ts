import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Geist Sans', ...fontFamily.sans]
    },
    screens: {
      '2xs': '320px',
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'xm': '992px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      on: 'rgb(var(--on) / <alpha-value>)',
      off: 'rgb(var(--off) / <alpha-value>)',
      main: 'rgb(var(--main) / <alpha-value>)',
      curtain: 'rgb(var(--curtain) / <alpha-value>)',
      sameBg: 'rgb(var(--same-bg) / <alpha-value>)',
      bgBase: 'rgb(var(--bg-base) / <alpha-value>)',
      sameText: 'rgb(var(--same-text) / <alpha-value>)',
      canvas: 'rgb(var(--canvas) / <alpha-value>)',
      thumbnail: 'rgb(var(--thumbnail) / <alpha-value>)',
      grey: {
        10: 'rgb(var(--gray-10) / <alpha-value>)',
        11: 'rgb(var(--gray-11) / <alpha-value>)',
        12: 'rgb(var(--gray-12) / <alpha-value>)',
        13: 'rgb(var(--gray-13) / <alpha-value>)',
        14: 'rgb(var(--gray-14) / <alpha-value>)',
        15: 'rgb(var(--gray-15) / <alpha-value>)',
        16: 'rgb(var(--gray-16) / <alpha-value>)',
        17: 'rgb(var(--gray-17) / <alpha-value>)',
        18: 'rgb(var(--gray-18) / <alpha-value>)',
        19: 'rgb(var(--gray-19) / <alpha-value>)',
        20: 'rgb(var(--gray-20) / <alpha-value>)',
        21: 'rgb(var(--gray-21) / <alpha-value>)',
        22: 'rgb(var(--gray-22) / <alpha-value>)',
        23: 'rgb(var(--gray-23) / <alpha-value>)',

        81: 'rgb(var(--gray-81) / <alpha-value>)',
        82: 'rgb(var(--gray-82) / <alpha-value>)',
        83: 'rgb(var(--gray-83) / <alpha-value>)',
        84: 'rgb(var(--gray-84) / <alpha-value>)',
        85: 'rgb(var(--gray-85) / <alpha-value>)',
        86: 'rgb(var(--gray-86) / <alpha-value>)',
        87: 'rgb(var(--gray-87) / <alpha-value>)',
        88: 'rgb(var(--gray-88) / <alpha-value>)',
      },
      red: {
        1: 'rgb(var(--red-1) / <alpha-value>)',
        2: 'rgb(var(--red-2) / <alpha-value>)',
        3: 'rgb(var(--red-3) / <alpha-value>)',
        4: 'rgb(var(--red-4) / <alpha-value>)',
        5: 'rgb(var(--red-5) / <alpha-value>)',
      },
      orange: {
        1: 'rgb(var(--orange-1) / <alpha-value>)',
        2: 'rgb(var(--orange-2) / <alpha-value>)',
      },
      yellow: {
        1: 'rgb(var(--yellow-1) / <alpha-value>)',
        2: 'rgb(var(--yellow-2) / <alpha-value>)',
        3: 'rgb(var(--yellow-3) / <alpha-value>)',
        4: 'rgb(var(--yellow-4) / <alpha-value>)',
      },
      green: {
        1: 'rgb(var(--green-1) / <alpha-value>)',
        2: 'rgb(var(--green-2) / <alpha-value>)',
        3: 'rgb(var(--green-3) / <alpha-value>)',
      },
      mint: {
        1: 'rgb(var(--mint-1) / <alpha-value>)',
        2: 'rgb(var(--mint-2) / <alpha-value>)',
      },
      teal: {
        1: 'rgb(var(--teal-1) / <alpha-value>)',
        2: 'rgb(var(--teal-2) / <alpha-value>)',
      },
      cyan: {
        1: 'rgb(var(--cyan-1) / <alpha-value>)',
        2: 'rgb(var(--cyan-2) / <alpha-value>)',
      },
      blue: {
        1: 'rgb(var(--blue-1) / <alpha-value>)',
        2: 'rgb(var(--blue-2) / <alpha-value>)',
        3: 'rgb(var(--blue-3) / <alpha-value>)',
        4: 'rgb(var(--blue-4) / <alpha-value>)',
        5: 'rgb(var(--blue-5) / <alpha-value>)',
      },
      indigo: {
        1: 'rgb(var(--indigo-1) / <alpha-value>)',
        2: 'rgb(var(--indigo-2) / <alpha-value>)',
      },
      purple: {
        1: 'rgb(var(--purple-1) / <alpha-value>)',
        2: 'rgb(var(--purple-2) / <alpha-value>)',
      },
      pink: {
        1: 'rgb(var(--pink-1) / <alpha-value>)',
        2: 'rgb(var(--pink-2) / <alpha-value>)',
      },
      brown: {
        1: 'rgb(var(--brown-1) / <alpha-value>)',
        2: 'rgb(var(--brown-2) / <alpha-value>)',
      }
    },
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        maxHeight: "max-height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "100%",
      },
      maxWidth: {
        "8xl": "100rem",
        "sm": "26rem",
      },
      opacity: {
        bg: 'var(--bg-opacity)'
      },
      fontSize: {
        "3xl": "2rem",
      },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "100%",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "100%",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-menu": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-menu": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-in-cart": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-cart": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "ring": "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right": "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top": "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open": "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close": "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "enter": "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        "leave": "leave 150ms ease-in forwards",
        "slide-in-menu": "slide-in-menu 0.5s cubic-bezier(.41,.73,.51,1.02)",
        "slide-out-menu": "slide-out-menu 0.5s cubic-bezier(.41,.73,.51,1.02)",
        "slide-in-cart": "slide-in-cart 0.5s cubic-bezier(.41,.73,.51,1.02)",
        "slide-out-cart": "slide-out-cart 0.5s cubic-bezier(.41,.73,.51,1.02)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
export default config;
