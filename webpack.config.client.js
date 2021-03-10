const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = env => {
    return {
        entry: {
            "main": ["./src/Client.js"]
        },
        output: {
            filename: `[name].js`,
            path: path.join(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss']
        },
        devtool: 'eval-source-map',
        module: {
            rules: [
                { 
                    test: /\.(js|.jsx)$/, 
                    exclude: /node_modules/, 
                    use: {loader: 'babel-loader'}
                },
                {
                    test: /\.(pdf|png|jpg|jpeg|gif|svg)$/,
                    use: 'file-loader'
                },
                {
                    test: [/\.css$/, /\.scss$/],
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' },
                        { loader: 'postcss-loader' }
                    ]
                }
            ]
        }
    }
}