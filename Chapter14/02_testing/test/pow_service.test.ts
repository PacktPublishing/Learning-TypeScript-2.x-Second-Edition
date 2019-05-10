import { expect } from "chai";
import * as request from "supertest";
import { getApp } from "../src/backend/server";

// This is an integration test of a backend service
// powered by node.js and express.js
// We send an HTTP GET request and check that the
// response works as expected.

describe("Math Service", function() {
    it("HTTP GET /api/math/pow/:base/:exponent", async () => {
        const app = getApp();
        return request(app).get("/api/math/pow/2/3")
                    .set("Accept", "application/json")
                    .expect("Content-Type", /json/)
                    .expect(200)
                    .then((response) =>
                        expect(response.body.result).eql(8)
                    );
    });
});
