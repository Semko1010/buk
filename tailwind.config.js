/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
			colors:{
				buttonPrimary:"#3389ED"
			}

    },
  },
  plugins: [],
}
