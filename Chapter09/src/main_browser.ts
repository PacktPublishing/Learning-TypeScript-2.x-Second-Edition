import { Calculator } from "./calculator";
import "./main.scss";

const calculator = new Calculator();

const addResult = calculator.calculate("add", 2, 3);
const powResult = calculator.calculate("pow", 2, 3);

const $main = document.querySelector("#main");

if ($main) {
    $main.innerHTML = `
        <p>2 + 3 = ${addResult}<p>
        <p>2 + 3 = ${powResult}<p>
    `;
}
