import { isNumber } from "./validation";

export function pow(base: number, exponent: number) {
    isNumber(base);
    isNumber(exponent);
    let result = base;
    for (let i = 1; i < exponent; i++) {
        result = result * base;
    }
    return result;
}
