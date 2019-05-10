namespace higher_oder_function_demo_1 {

    function addDelay(func: () => void, ms: number) {
        setTimeout(() => {
            func();
        }, ms);
    }

    function sayHello() {
        console.log("Hello world!");
    }

    addDelay(sayHello, 500); // Prints "Hello world!" (after 500 ms)

}

namespace higher_oder_function_demo_2 {

    function addDelay(msg: string, ms: number) {
        return () => {
            setTimeout(() => {
                console.log(msg);
            }, ms);
        };
    }

    const delayedSayHello = addDelay("Hello world!", 500);
    delayedSayHello(); // Prints "Hello world!" (after 500 ms)

}

namespace higher_oder_function_demo_3 {

    function addDelay(func: () => void, ms: number) {
        return () => {
            setTimeout(() => {
                func();
            }, ms);
        };
    }

    function sayHello() {
        console.log("Hello world!");
    }

    const delayedSayHello = addDelay(sayHello, 500);
    delayedSayHello(); // Prints "Hello world!" (after 500 ms)

}
