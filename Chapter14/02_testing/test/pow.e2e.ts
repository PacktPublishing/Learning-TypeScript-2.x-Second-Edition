import { NightwatchBrowser } from "nightwatch";

// This is an end-to-end test. We use a real web browser
// to simulate a real user and check that everything
// works as expected.

const test = {
  "Calculator pow e2e test example": (browser: NightwatchBrowser) => {
    browser
      .url("http://localhost:3000/")
      .waitForElementVisible("body", 1000)
      .assert.title("Calculator")
      .assert.visible("#base")
      .assert.visible("#exponent")
      .clearValue("#base")
      .setValue("#base", "2")
      .clearValue("#exponent")
      .setValue("#exponent", "3")
      .click("#submit_btn")
      .pause(500)
      .assert.containsText("#result", "8")
      .end();
  }
};

export = test;
