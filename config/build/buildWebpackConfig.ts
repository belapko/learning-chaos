import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration {
    const {mode, paths} = options;
    return {
        mode,
        entry: paths.entry, // for multiple entrypoints we can pass object with keys
        output: {
            filename: '[name].[contenthash].js', // keys in entry will be the name and the contenthash is a random hash
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    };
};