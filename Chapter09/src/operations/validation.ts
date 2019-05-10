export function isNumber(a: number) {
    if (typeof a !== "number") {
        throw new Error(`${a} must be a number!`);
    }
}
