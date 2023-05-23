export default {
  	content: [
    	"./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}",
  	],
  	theme: {
    	extend: {
    		colors: {
				transparent: 'transparent',
				black: "#000000",
				darkBlue: '#2f393d',
				lightBlue: '#9fb5bf',
				blue: '#526f7c',
				darkGray: '#212224',
				gray: '#d4d9db',
				brown: '#433a2d',
				tan: '#a79479',
				beige: '#f8f2da',
				greige: '#eae5d9',
    		},
			backgroundImage: {
				salon : "url('/img/hero-pattern.svg')",
			  }
    	}
  	},
  	plugins: [],
}


