/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        customText: {
          primaryLight: '#fff',
          primaryMed: '#98BDD4',
          primaryDark: '#000',
          accentOrange: '#FF8A00',
          secondaryGray: '#A8A8A8',
          secondaryDBlue: '#0B293D',
          secondaryLBlue: '#3FA9ED',
          secondaryGrayBlue: '#0B293D'
        },
        customBg: {
          dark: '#04121B',
          light: '#fff',
          secondaryDark: '#0A2536',
          secondaryLight: '#98BDD4'
        }
      }
    },
  },
  plugins: [],
}

