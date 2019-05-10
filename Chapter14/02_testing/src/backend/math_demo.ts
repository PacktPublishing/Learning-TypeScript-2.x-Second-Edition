import { MathInterface } from "./interfaces";

export class MathDemo implements MathInterface {

  public PI: number;

  public constructor() {
    this.PI = 3.14159265359;
  }

  // used to showcase how to test a sync function
  public pow(base: number, exponent: number) {
    let result = base;
    for (let i = 1; i < exponent; i++) {
      result = result * base;
    }
    return result;
  }

  // used to show case how to test async code with done()
  public powAsync(base: number, exponent: number) {
    return new Promise<number>((resolve) => {
      setTimeout(
        () => {
          const result = this.pow(base, exponent);
          resolve(result);
        },
        0
      );
    });
  }

  // simulate slow > 40ms
  public powAsyncSlow(base: number, exponent: number) {
    return new Promise<number>((resolve) => {
      setTimeout(
        () => {
          const result = this.pow(base, exponent);
          resolve(result);
        },
        45
      );
    });
  }

  // simulate reelly slow function > 100ms
  public powAsyncReallySlow(base: number, exponent: number) {
    return new Promise<number>((resolve) => {
      setTimeout(
        () => {
          const result = this.pow(base, exponent);
          resolve(result);
        },
        101
      );
    });
  }

  // simulate too slow > 2000ms (breaks build)
  public powAsyncTooSlow(base: number, exponent: number) {
    return new Promise<number>((resolve) => {
      setTimeout(
        () => {
          const result = this.pow(base, exponent);
          resolve(result);
        },
        2001
      );
    });
  }

  // used to showcase how to assert that an error is thrown
  public bad(foo: any) {
    if (foo === null) {
      throw new Error("Error!");
    } else {
      return this.pow(5, 5);
    }
  }

}
