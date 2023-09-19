import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = {
		// ts to js when webpack compiling. If we don't use ts, we need babel-loader
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // create individual css files in dev mode?
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]', // classNames
						auto: /\.module./, // exclude random classname for not .module. files
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader]; // order important
}
