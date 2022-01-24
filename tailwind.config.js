module.exports = {
  corePlugins: {
    // preflight: false,
  },
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    letterSpacing: {
      sublogo: '.80em'
    },
    fontSize: {
      sublogo: '.55rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
