// const chalk = require('chalk'); // not working for ES module
import chalk from 'chalk';
// console.log(chalk.red("hiiiiii"))

import validator from "validator";

const res = validator.isEmail("2001.mehta.2001@gmail.com");
console.log(res?chalk.blue(res):chalk.red(res));