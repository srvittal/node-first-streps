const chalk = require('chalk');
const greet = require('./greet');

const test = chalk.bgGreen.white(greet('Xola'));
console.log(test);