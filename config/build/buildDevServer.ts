import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port, // server port
		open: true, // open new window in browser when server starts
		historyApiFallback: true, // Allows to proxy requests through a specified index page (by default 'index.html'), useful for Single Page Applications that utilise the HTML5 History API
		hot: true, // hot modules webpack
	};
}
