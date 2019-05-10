export interface MathInterface {
  PI: number;
  pow(base: number, exponent: number): number;
  powAsync(base: number, exponent: number): Promise<number>;
  powAsyncSlow(base: number, exponent: number): Promise<number>;
  powAsyncReallySlow(base: number, exponent: number): Promise<number>;
  powAsyncTooSlow(base: number, exponent: number): Promise<number>;
  bad(foo: any): void;
}
