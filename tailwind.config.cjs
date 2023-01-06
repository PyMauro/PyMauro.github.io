/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: theme => ({
				'wave-pattern': "url('../public/img/wave-white.png')",
				'wave-pattern-dots': "url('../public/img/pattern-white-dots.png')",
				'wave-pink': "url('../public/img/wave-pink')"
			})
		},
		screens:{
			'xsm':'390px'
		}
	},
	plugins: [

	],
}
