/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#040D12',
				primary: '#183D3D',
				secondary: '#5C8374',
				accent: '#93B1A6'
			}
		},
	},
	plugins: [],
}
