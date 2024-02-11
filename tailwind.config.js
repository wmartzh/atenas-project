/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('daisyui')],
  daysiui:{
    themes: ['light','dark'],
    base: true,
    styled: true,
    utils: true,
    themeRoot:"*"
  }
};

