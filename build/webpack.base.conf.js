const path = require('path')
const webpack = require('webpack')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        library:'vue-ui-form',
        libraryTarget: 'umd'  // exposes and know when to use module.exports or exports.
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        vue: 'vue'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
        /* new UglifyJSPlugin({
            compress: { warnings: false },
            mangle: false,
            beautify: false
        })*/
    ]
}