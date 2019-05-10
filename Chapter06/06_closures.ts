namespace closures_demo_1 {

    function makeArmy() {
        const shooters = [];
        for (let i = 0; i < 10; i++) {
            ((index: number) => {
                const shooter = () => {
                  console.log(index);
                };
                shooters.push(shooter);
            })(i);
        }
        return shooters;
    }

}

namespace closures_demo_2 {

    class Counter {
        private static _COUNTER = 0;
        public increment() {
            this._changeBy(1);
        }
        public decrement() {
            this._changeBy(-1);
        }
        public value() {
            return Counter._COUNTER;
        }
        private _changeBy(val: number) {
            Counter._COUNTER += val;
        }
    }

    let counter1 = new Counter();
    let counter2 = new Counter();
    console.log(counter1.value()); // 0
    console.log(counter2.value()); // 0
    counter1.increment();
    counter1.increment();
    console.log(counter1.value()); // 2
    console.log(counter2.value()); // 2 (expected 0)
    counter1.decrement();
    console.log(counter1.value()); // 1
    console.log(counter2.value()); // 1 (expected 0)

}

namespace closures_demo_3 {

    function makeCounter() {

        // closure context
        let _COUNTER = 0;

        function changeBy(val: number) {
            _COUNTER += val;
        }

        class Counter {
            public increment() {
                changeBy(1);
            }
            public decrement() {
                changeBy(-1);
            }
            public value() {
                return _COUNTER;
            }
        }

        return new Counter();

    }

    let counter1 = makeCounter();
    let counter2 = makeCounter();
    console.log(counter1.value()); // 0
    console.log(counter2.value()); // 0
    counter1.increment();
    counter1.increment();
    console.log(counter1.value()); // 2
    console.log(counter2.value()); // 0 (expected 0)
    counter1.decrement();
    console.log(counter1.value()); // 1
    console.log(counter2.value()); // 0 (expected 0)

}
