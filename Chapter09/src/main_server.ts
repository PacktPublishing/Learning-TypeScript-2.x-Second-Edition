import chalk from "chalk";
import { Calculator } from "./calculator";

const calculator = new Calculator();

const addResult = calculator.calculate("add", 2, 3);

console.log(chalk.green(`2 + 3 = ${addResult}`)); // tslint:disable-line

const powResult = calculator.calculate("pow", 2, 3);

console.log(chalk.green(`2 + 3 = ${powResult}`)); // tslint:disable-line
