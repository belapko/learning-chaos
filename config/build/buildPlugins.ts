import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { BuildOptions } from 'config/build/types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins ({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ // includes html and js in html in build
            template: paths.html, // path to index.html file
        }),
        new webpack.ProgressPlugin(), // shows in console building progressbar
        new MiniCssExtractPlugin({ // creates css files in build instead of inline css in js
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css', // for async files that needs for individual chunks that will be loaded asynchronously
        }),
    ];
};