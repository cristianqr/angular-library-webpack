module.exports = {
    entry: './dist/public_api.js',
    output: {
        filename: 'angular-library-webpack.js',
        libraryTarget: 'commonjs'
    },
    externals: {
        '@angular/core': '@angular/core',
        '@angular/router': '@angular/router',
   },
   mode: 'production',
   optimization: {
        minimize: false
    },
}