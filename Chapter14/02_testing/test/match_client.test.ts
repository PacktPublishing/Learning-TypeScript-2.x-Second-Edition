import { expect } from "chai";
import { stub } from "sinon";
import { MathClient } from "../src/frontend/math_client";

// Here we will write some unit test for the math client
// it demostrates how we can use dependency injection to
// replace dependencies with fake dependencies

describe("MathDemo", () => {
    it("Should return result of pow calculation", async () => {

        const expectedResult = "8";

        const response = {
            json: () => Promise.resolve({ result: expectedResult })
        };

        const stubedFetch = stub(global, "fetch" as any);
        stubedFetch.returns(Promise.resolve(response));

        const mathClient = new MathClient();
        const actualResult = await mathClient.pow(2, 3);
        expect(expectedResult).to.eq(actualResult);
        expect(stubedFetch.callCount).to.eq(1);

      });
});
