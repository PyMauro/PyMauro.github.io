/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: theme => ({
				'wave-pattern': "url('/img/wave-white.png')",
				'wave-pattern-dots': "url('/img/pattern-white-dots.png')",
				'wave-pink': "url('/img/wave-pink.png')",
				'pattern-characters-red': "url('/img/pattern-characters-red.png')",
				'yellow-dots': "url('/img/pattern-yellow-dots.png')",
				'character-mario': "url('img/character-l.png')",
			})
		},
		screens: {
			'xsm': '480px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		}
	},
	plugins: [

	],
}
