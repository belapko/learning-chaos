import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // these options change how modules are resolved
		preferAbsolute: true, // prefer absolute imports
		modules: [options.paths.src, 'node_modules'], // path to root dir for absolute impoers
		mainFiles: ['index'], // main file for each module
		alias: { '@': options.paths.src }, // all absolute exports/imports from src like @/app/.....
	};
}
