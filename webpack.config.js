const config = {
    mode: 'development',
    devtool: false,
    entry: `${__dirname}/src/web/client.entry.jsx`,
    output: {
      filename: 'client.entry.js',
      path: `${__dirname}/src/build`
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}

module.exports = config;