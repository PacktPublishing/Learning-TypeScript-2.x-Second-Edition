namespace rest_parameters {

    function add1(foo: number, bar: number, foobar: number = 0): number {
        return foo + bar + foobar;
    }

    function add2(...foo: number[]): number {
        let result = 0;
        for (let i = 0; i < foo.length; i++) {
          result += foo[i];
        }
        return result;
    }

    add2(); // 0
    add2(2); // 2
    add2(2, 2); // 4
    add2(2, 2, 2); // 6
    add2(2, 2, 2, 2); // 8
    add2(2, 2, 2, 2, 2); // 10
    add2(2, 2, 2, 2, 2, 2); // 12

    function add3(foo: number[]): number {
        let result = 0;
        for (let i = 0; i < foo.length; i++) {
          result += foo[i];
        }
        return result;
    }

    add3(); // Error, expected 1 arguments, but got 0.
    add3(2); // Error, '2' is not assignable to parameter of type 'number[]'.
    add3(2, 2); // Error, expected 1 arguments, but got 2.
    add3(2, 2, 2); // Error, expected 1 arguments, but got 3.

    add3([]); // returns 0
    add3([2]); // returns 2
    add3([2, 2]); // returns 4
    add3([2, 2, 2]); // returns 6

}
