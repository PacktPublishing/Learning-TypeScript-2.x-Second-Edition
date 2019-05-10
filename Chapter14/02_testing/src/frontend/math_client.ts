export class MathClient {
    public async pow(base: number, exponent: number): Promise<string> {
        const res = await fetch(`/api/math/pow/${base}/${exponent}`);
        const json = await res.json();
        return json.result.toString();
    }
}
