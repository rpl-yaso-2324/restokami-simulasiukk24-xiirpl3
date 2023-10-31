/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
			},
			colors: {
				redpastel: "#FF9191",
			},
		},
	},
	plugins: [],
};
