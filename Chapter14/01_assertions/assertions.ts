import { MathApi } from "./application";

const actual1 = MathApi.pow(3, 5);
const expected1 = 243;
const asertion1 = actual1 === expected1;

if (asertion1 === false) {
    throw new Error(
        `Expected 'actual1' to be ${expected1} ` +
        `but got ${actual1}!`
    );
}

const actual2 = MathApi.pow(5, 3);
const expected2 = 125;
const asertion2 = actual2 === expected2;

if (asertion2 === false) {
    throw new Error(
        `Expected 'actual2' to be ${expected2} ` +
        `but got ${actual2}!`
    );
}
