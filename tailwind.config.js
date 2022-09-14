/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["inter", "sans-serif"],
			},
			fontSize: {
				"1xl": "64px",
				"2xl": "52px",
				"3xl": "45px",

				"4xl": "32px",
				xxl: "28px",
				xl: "24px",
				lg: "18px",
				md: "16px",
				sm: "14px",
				xs: "12px",
			},

			colors: {
				headingColor: "#131313",
				fontColorPrimary: "#222222",
				buttonPrimary: "#3389ED",
				agendaPrimary: "rgba(196, 196, 196, 0.1)",
				buttonTextColor: "#3B8AE8",
			},
		},
	},
	plugins: [],
};
