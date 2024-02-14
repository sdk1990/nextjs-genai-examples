import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#0439FE',
					'primary-content': '#F7E9FF',
					secondary: '#91F7F8',
					'secondary-content': '#0D0024',
					accent: '#F7E9FF',
					'accent-content': '#0D0024',
					neutral: '#0D0024',
				},
			},
		],
		base: false,
	},
	plugins: [require('tailwindcss-animate'), require('daisyui')],
};
export default config;
