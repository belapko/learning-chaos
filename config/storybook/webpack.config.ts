import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import { WebpackConfiguration } from 'webpack-dev-server';
import { buildCssLoader } from 'config/build/loaders/buildCssLoader';
import { buildSvgLoader } from 'config/build/loaders/buildSvgLoader';

// extends storybook config
export default ({ config }: { config: WebpackConfiguration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');
	config.resolve.alias = { '@': paths.src };

	config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
		// exclude default rule for svg in storybook
		if (/svg/.test(rule.test as string)) {
			// if rule associated with svg exclude rule
			return { ...rule, exclude: /\.svg$/i };
		}
		// if rule is not associated with svg return rule
		return rule;
	});

	config.module.rules.push(buildSvgLoader());
	config.module.rules.push(buildCssLoader(true));

	config.plugins.push(
		new webpack.DefinePlugin({
			__IS_DEV__: true,
		})
	);

	return config;
};
