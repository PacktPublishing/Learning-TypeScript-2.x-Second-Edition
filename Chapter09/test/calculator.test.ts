import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe("Calculator", () => {

    it ("Should be able to calculate operations", () => {
        const calculator = new Calculator();
        const addResult = calculator.calculate("add", 2, 3);
        expect(addResult).to.eql(5);
        const powResult = calculator.calculate("pow", 2, 3);
        expect(powResult).to.eql(8);
    });

    it ("Should throw if an invalid operation is provided", () => {
        const calculator = new Calculator();
        const throws = () => calculator.calculate("division", 2, 3);
        expect(throws).to.throw();
    });

});
