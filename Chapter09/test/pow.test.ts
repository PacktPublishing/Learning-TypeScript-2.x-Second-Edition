import { expect } from "chai";
import { pow } from "../src/operations/pow";

describe("Operation: pow", () => {

    it ("Should be able to calculate operation", () => {
        const result = pow(2, 3);
        expect(result).to.eql(8);
    });

    it ("Should throw if an invalid argument is provided", () => {
        const a: any = "2";
        const b: any = 3;
        const throws = () => pow(a, b);
        expect(throws).to.throw();
    });

});
