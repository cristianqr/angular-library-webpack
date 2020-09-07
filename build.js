const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');

shell.rm('-Rf', ['./dist/*']);

shell.echo(chalk.green('Transpile typescript with ngc'));
shell.exec('./node_modules/.bin/ngc -p tsconfig.json');

shell.echo(chalk.green('bundle ESM2015 with webpack'));
shell.exec('./node_modules/.bin/webpack --config webpack-esm2015.config.js');

shell.echo(chalk.green('bundle UMD with webpack'));
shell.exec('./node_modules/.bin/webpack --config webpack-umd.config.js');

shell.echo(chalk.green('Clean dist folder'));
shell.rm('-Rf', ['./dist/*/!(*.umd.js|angular-library-webpack.js|*.d.ts)']);

shell.echo(chalk.green('Copy package.json and README.md'));
const package = require('./package.json');
delete package.devDependencies;
fs.writeFileSync('./dist/package.json', JSON.stringify(package, null, 2));
shell.cp('-Rf', ['README.md'], './dist');
