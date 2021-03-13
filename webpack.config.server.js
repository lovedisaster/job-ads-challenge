const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const GlobalStyle = require('./src/globalStyles/GlobalStyles');

module.exports = env => {
    const webpackDefinPlugin = new webpack.DefinePlugin({
        ENV: JSON.stringify(env),
        GS: JSON.stringify(GlobalStyle),
        CLIENT:JSON.stringify(false)
    });
    return {
        entry: {
            "main-server": ["./server/app.js"]
        },
        output: {
            filename: `[name].js`,
            path: path.join(__dirname, 'server'),
            libraryTarget: "commonjs2"
        },
        resolve: {
            extensions: ['.js']
        },
        externals: [nodeExternals()],
        target: 'node',
        module: {
            rules: [
                { 
                    test: /js$/, 
                    exclude: /node_modules/, 
                    use: {loader: 'babel-loader'}
                },
                {
                    test: [/\.css$/, /\.scss$/],
                    use: 'ignore-loader'
                }
            ]
        },
        plugins: [
            webpackDefinPlugin,
        ]
    }
}