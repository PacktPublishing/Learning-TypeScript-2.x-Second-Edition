import { expect } from "chai";
import { isNumber } from "../src/operations/validation";

describe("isNumber", () => {

    it ("Should be able to add calculate operation", () => {
        const works = () => isNumber(2);
        expect(works).not.to.throw();
    });

    it ("Should throw if an invalid argument is provided", () => {
        const a: any = "2";
        const throws = () => isNumber(a);
        expect(throws).to.throw();
    });

});
