const chromedriver = require("chromedriver");

module.exports = {
    before: (done) => {
        chromedriver.start();
        done();
    },
    after: (done) => {
        chromedriver.stop();
        done();
    },
    reporter: function(results) {
        if (
            (typeof(results.failed) === "undefined" || results.failed === 0) &&
            (typeof(results.error) === "undefined" || results.error === 0)
        ) {
            process.exit(0);
        } else {
            process.exit(1);
        }
    }
};
