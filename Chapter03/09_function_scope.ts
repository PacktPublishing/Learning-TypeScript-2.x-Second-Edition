namespace scope {

    function foo1(): void {
        if (true) {
            var bar: number = 0;
        }
        console.log(bar);
    }

    foo1(); // 0

    function foo2(): void {
        bar = 0;
        var bar: number;
        console.log(bar);
    }

    foo2(); // 0

    function foo3(): void {
        if (true) {
           let bar: number = 0;
           bar = 1;
        }
        console.log(bar); // Error
    }

    function foo4(): void {
        if (true) {
          const bar: number = 0;
          bar = 1; // Error
        }
        console.log(bar); // Error
    }

}
