namespace pipes_demo {

    function curry3<T1, T2, T3, T4>(fn: (a: T1, b: T2, c: T3) => T4) {
        return (a: T1) => (b: T2) => (c: T3) => fn(a, b, c);
    }

    const pipe = <T>(...fns: Array<(arg: T) => T>) =>
        (value: T) => fns.reduce((acc, fn) => fn(acc), value);

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();

    const replace = curry3(
        (s: string, f: string, r: string) => s.split(f).join(r)
    );

    const trimCapitalizeAndReplace = pipe(
        trim,
        capitalize,
        replace("/")("-")
    );

    trimCapitalizeAndReplace("   13/feb/1989   "); // "13-FEB-1989"

}
