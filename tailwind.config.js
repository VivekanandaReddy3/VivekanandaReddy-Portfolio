/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        sf: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        russo: ['"Russo One"', 'sans-serif'],
        work: ['"Work Sans"', 'sans-serif'],
        saans: ['SaansFont', 'sans-serif']
      },
    },
  },
  plugins: [],
}

