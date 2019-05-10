import * as R from "ramda";

// npm install --save ramda
// npm install --save-dev @types/ramda

namespace ramda_demo_1 {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = R.compose(trim, capitalize);

    const replace = (s: string, f: string, r: string) =>
        s.split(f).join(r);

    const curriedReplace = R.curry(replace);

    const trimCapitalizeAndReplace = R.compose(
        trimAndCapitalize,
        curriedReplace("/")("-")
    );

    trimCapitalizeAndReplace("   13/feb/1989   "); // "13-FEB-1989"

}
