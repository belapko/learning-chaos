import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode, // development or production (stores in .env)
        entry: paths.entry, // for multiple entrypoints we can pass object with keys
        output: {
            filename: '[name].[contenthash].js', // keys in entry will be the name and the contenthash is a random hash
            path: paths.build, // path to build folder
            clean: true, // create new build file and delete old
        },
        module: {
            rules: buildLoaders(), // the rules by which the project is going
        },
        resolve: buildResolvers(), // these options change how modules are resolved
        plugins: buildPlugins(options), // plugins configuration
        devtool: isDev ? 'inline-source-map' : undefined, // to see where errors in code
        devServer: isDev ? buildDevServer(options) : undefined, // dev server config. run webpack and server on each code change
    };
}
