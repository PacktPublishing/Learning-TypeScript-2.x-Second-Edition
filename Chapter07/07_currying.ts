namespace currying_demo_1 {

    function curry2<T1, T2, T3>(fn: (a: T1, b: T2) => T3) {
        return (a: T1) => (b: T2) => fn(a, b);
    }

    function add(a: number, b: number) {
        return a + b;
    }

    const curriedAdd = curry2(add);
    const add5 = curriedAdd(5);
    const addResult = add5(5);
    console.log(addResult); // 10

    function multiply(a: number, b: number) {
        return a * b;
    }

    const curriedMultiply = curry2(multiply);
    const multiplyBy5 = curriedMultiply(5);
    const multiplyResult = multiplyBy5(5);
    console.log(multiplyResult); // 25

}

namespace currying_demo_2 {

    function curry3<T1, T2, T3, T4>(fn: (a: T1, b: T2, c: T3) => T4) {
        return (a: T1) => (b: T2) => (c: T3) => fn(a, b, c);
    }

    const compose = (...functions: Array<(arg: any) => any>) =>
        (arg: any) =>
            functions.reduce((prev, curr) => {
                return curr(prev);
            }, arg);

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = compose(trim, capitalize);

    const replace = (s: string, f: string, r: string) =>
        s.split(f).join(r);

    const curriedReplace = curry3(replace);
    const trimCapitalizeAndReplace = compose(
        trimAndCapitalize,
        curriedReplace("/")("-")
    );

    trimAndCapitalize("   13/feb/1989   "); // "13-FEB-1989"

}
