namespace itreable_demo1 {

  class Fib implements IterableIterator<number> {

    protected fn1 = 0;
    protected fn2 = 1;

    public constructor(protected maxValue?: number) {}

    public next(): IteratorResult<number> {
      var current = this.fn1;
      this.fn1 = this.fn2;
      this.fn2 = current + this.fn1;
      if (this.maxValue && current <= this.maxValue) {
        return {
          done: false,
          value: current
        };
      } else {
        return {
          done: true,
          value: 0
        };
      }
    }

    public [Symbol.iterator](): IterableIterator<number> {
      return this;
    }

  }

  let fib = new Fib();

  fib.next(); // { done: false, value: 0 }
  fib.next(); // { done: false, value: 1 }
  fib.next(); // { done: false, value: 1 }
  fib.next(); // { done: false, value: 2 }
  fib.next(); // { done: false, value: 3 }
  fib.next(); // { done: false, value: 5 }

  let fibMax21 = new Fib(21);

  for (let num of fibMax21) {
    console.log(num); // Prints fibonacci sequence 0 to 21
  }

}
