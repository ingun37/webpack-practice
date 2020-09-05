const path = require('path');

module.exports = {

    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        library: 'closet'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: 'ts-loader',
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
              },
            ],
        },]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        contentBase: './dist',
    }
};