namespace stack_demo {

    function foo(a: number): number {
        const value = 12;
        return value + a;
    }

    function bar(b: number): number {
        const value = 4;
        return foo(value * b);
    }

    bar(21);

}

namespace stack_demo_2 {

    function foo(a: number): number {
        const value = 12;
        return bar(value + a);
    }

    function bar(b: number): number {
        const value = 4;
        return foo(value * b);
    }

    bar(21);

}
