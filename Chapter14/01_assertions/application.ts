export class MathApi {
    public static pow(base: number, exponent: number) {
        let result = base;
        for (var i = 1; i < exponent; i++) {
            result = result * base;
        }
        return result;
    }
}
