var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
var HtmlWebpackInlineStylePlugin = require('html-webpack-inline-style-plugin');

//var extractPlugin = new ExtractTextPlugin({
//   filename: 'main.css'
//});

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [/*'style-loader',*/ 'css-loader', 'sass-loader']
                })
                //loader: ExtractTextWebpackPlugin.extract('css-loader', 'sass-loader')
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'index.html'}),
      new ExtractTextWebpackPlugin({
        filename: 'main.css',
        disable: false //--
      }),
      new StyleExtHtmlWebpackPlugin(), //--
      new HtmlWebpackInlineStylePlugin(), //--
      new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
    //  contentBase: path.join(__dirname, "./dist"),
    //  compress: true,
    //  port: 9000,
      inline: true,
      hot: true,
    },
};
