const config = {
	mode: 'production',
	entry: {
		main: './src/js/main.js',
        popups: './src/js/popups.js',
        slider: './src/js/slider.js',
        accordion: './src/js/accordion.js',
        show: './src/js/show.js',
        /* animate: './src/js/animate.js', */
		/* contacts: './src/js/contacts.js', */
		/* about: './src/js/about.js', */
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
