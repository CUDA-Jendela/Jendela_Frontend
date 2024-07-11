/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: '#4A7C59',
        secondary: '#D9BF77',
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green: {
          0: '#000000',
          10: '#131F16',
          20: '#253E2C',
          30: '#34573E',
          40: '#3F6A4C',
          50: '#4A7C59',
          60: '#659072',
          70: '#80A38A',
          80: '#A5BEAC',
          90: '#D2DED5',
          95: '#E4EBE6',
          99: '#F6F8F7',
          100: '#FFFFFF',
        },
        yellow: {
          0: '#000000',
          10: '#36301E',
          20: '#6C5F3B',
          30: '#988654',
          40: '#B9A365',
          50: '#D9BF77',
          60: '#DFC98B',
          70: '#E4D2A0',
          80: '#ECDFBB',
          90: '#F5EFDD',
          95: '#F9F5EB',
          99: '#FDFCF8',
          100: '#FFFFFF',
        },
        neutral: {
          0: '#000000',
          10: '#3C3B3C',
          20: '#787677',
          30: '#A8A6A7',
          40: '#CCCACB',
          50: '#F0EDEE',
          80: '#F8F6F7',
          100: '#FFFFFF',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
        '150': '39rem',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}