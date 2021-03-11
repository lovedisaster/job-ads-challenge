const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = env => {
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
        }
    }
}