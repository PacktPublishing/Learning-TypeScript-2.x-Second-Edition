namespace default_parameters {

    function add1(foo: number, bar: number, foobar?: number): number {
      return foo + bar + (foobar !== undefined ? foobar : 0);
    }

    function add2(foo: number, bar: number, foobar: number = 0): number {
      return foo + bar + foobar;
    }

}
