import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            // includes html and js in html in build
            template: paths.html, // path to index.html file
        }),
        new webpack.ProgressPlugin(), // shows in console building progressbar
        new MiniCssExtractPlugin({
            // creates css files in build instead of inline css in js
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css', // for async files that needs for individual chunks that will be loaded asynchronously
        }),
        new webpack.DefinePlugin({
            // provides global variables to app
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];
}
