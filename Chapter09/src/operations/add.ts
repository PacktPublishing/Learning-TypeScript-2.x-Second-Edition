import { isNumber } from "./validation";

export function add(a: number, b: number) {
    isNumber(a);
    isNumber(b);
    return a + b;
}
