import { expect } from "chai";
import { add } from "../src/operations/add";

describe("Operation: add", () => {

    it ("Should be able to calculate operation", () => {
        const result = add(2, 3);
        expect(result).to.eql(5);
    });

    it ("Should throw if an invalid argument is provided", () => {
        const a: any = "2";
        const b: any = 3;
        const throws = () => add(a, b);
        expect(throws).to.throw();
    });

});
