export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717',
        sand: '#F5F2EC',
        accent: '#C49A6C',
        body: '#242424',
        mute: '#777777',
        line: '#EAEAEA'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif']
      }
    }
  },
  plugins: []
}
