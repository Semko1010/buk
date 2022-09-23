/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"public/*.{html,js}",
		"./public/**/*.{html,js}",
	],
	theme: {
		extend: {
			backgroundImage: {
				backAgenda: "url('/img/backAgenda.svg')",
			},
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
				res1: "10vw",
				res2: "8vw",
				res: "7vw",
			},

			colors: {
				headingColor: "#131313",
				fontColorPrimary: "#222222",
				fontColorSecondary: "#E1E1E1",
				buttonPrimary: "#3389ED",
				agendaPrimary: "rgba(196, 196, 196, 0.07)",
				buttonTextColor: "#3B8AE8",
			},
		},
	},
	plugins: [],
};
