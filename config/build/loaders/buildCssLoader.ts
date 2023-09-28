import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
	return {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // create individual css files in dev mode?
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]', // classNames
						auto: /\.module./, // exclude random classname for not .module. files
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	};
}
