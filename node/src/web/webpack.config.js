const path = require('path');

const config = {
    mode: 'development',
    devtool: false,
    entry: `${__dirname}/client.entry.tsx`,
    output: {
      filename: 'client.entry.js',
      path: path.resolve(__dirname, '../../build')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: { cacheDirectory: true },
                    },
                ],
            },
            {
                test: /\.(tsx|ts)$/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}

module.exports = config;