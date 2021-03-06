/**
 * webpack configuration
 */
module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};
