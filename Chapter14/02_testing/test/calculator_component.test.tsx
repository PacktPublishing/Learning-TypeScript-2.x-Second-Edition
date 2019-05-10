import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { stub } from "sinon";
import { Calculator } from "../src/frontend/calculator_component";
import { MathClient } from "../src/frontend/math_client";

// Here we will write some unit test for the claculator
// component.

Enzyme.configure({ adapter: new Adapter() });

describe("Calculator Component", () => {

  // Showcases how to use stub to isolate a component being
  // tested (Calculator) from its dependencies (MathClient)
  // also showcases how to test async code
  it("Should invoke client and set #result value when #submit.click is triggered", (done) => {

    const mathClient = new MathClient();

    const mathClientStub = stub(mathClient, "pow");
    mathClientStub.returns(Promise.resolve(8));

    mathClientStub.callsFake((base: number, exponent: number) => {
      expect(base).to.equal(2);
      expect(exponent).to.equal(3);
      done();
    });

    const wrapper = Enzyme.mount(<Calculator client={mathClient} />);

    expect(wrapper.find("input#base")).to.have.length(1);
    expect(wrapper.find("input#exponent")).to.have.length(1);
    expect(wrapper.find("button#submit_btn")).to.have.length(1);

    wrapper.find("input#base").simulate("change", { target: { value: "2" } });
    wrapper.find("input#exponent").simulate("change", { target: { value: "3" } });
    wrapper.find("button#submit_btn").simulate("click");

  });

});
