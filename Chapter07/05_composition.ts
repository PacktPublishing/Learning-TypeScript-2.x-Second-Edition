namespace composition_demo_1 {
    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = (s: string) => capitalize(trim(s));
    trimAndCapitalize("   hello world   "); // "HELLO WORLD"
}

namespace composition_demo_2 {
    const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));
    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = compose(trim, capitalize);
    trimAndCapitalize("   hello world   "); // "HELLO WORLD"
}

namespace composition_demo_3 {
    const compose = <T1, T2, T3>(f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

    const compose3 = <T1, T2, T3, T4>(
        f: (x: T3) => T4,
        g: (x: T2) => T3,
        h: (x: T1) => T2
    ) => (x: T1) => f(g(h(x)));

}

namespace composition_demo_4 {

    const compose = (...functions: Array<(arg: any) => any>) =>
        (arg: any) =>
            functions.reduce((prev, curr) => {
                return curr(prev);
            }, arg);

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();

    const trimAndCapitalize = compose(trim, capitalize);
    trimAndCapitalize("   hello world   "); // "HELLO WORLD"

}
