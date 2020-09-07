module.exports = {
    entry: './dist/public_api.js',
    output: {
        filename: 'angular-library-webpack.umd.js',
        libraryTarget: 'umd'
    },
    externals: {
        '@angular/core': {root: 'ng.core', commonjs: '@angular/core', commonjs2: '@angular/core'},
        '@angular/router': {root: 'ng.router', commonjs: '@angular/router', commonjs2: '@angular/router'},
   },
   mode: 'production',
}