import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = { // ts to js when webpack compiling
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader];
}
