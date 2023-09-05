import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { BuildOptions } from 'config/build/types/config';

export function buildPlugins ({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ // includes html and js in html in build
            template: paths.html, // path to index.html file
        }),
        new webpack.ProgressPlugin(), // shows in console building progressbar
    ];
};