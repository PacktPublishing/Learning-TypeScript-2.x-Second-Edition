namespace optional_parameters {

    function add1(foo: number, bar: number, foobar: number): number {
        return foo + bar + foobar;
    }

    add1();        // Error, expected 3 arguments, but got 0.
    add1(2, 2);    // Error, expected 3 arguments, but got 2.
    add1(2, 2, 2); // OK, returns 6

    function add2(foo: number, bar: number, foobar?: number): number {
        let result = foo + bar;
        if (foobar !== undefined) {
          result += foobar;
        }
        return result;
    }

    add2();        // Error, expected 2-3 arguments, but got 0.
    add2(2, 2);    // OK, returns 4
    add1(2, 2, 2); // OK, returns 6

}
