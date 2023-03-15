const customTheme = require('./utils/theme-tailwind.cjs')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: customTheme,
  },
  plugins: [],
};

