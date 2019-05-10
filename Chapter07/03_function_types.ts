namespace function_types_demo {

    function isNull<T>(a: T|null) {
        return (a === null);
    }

    function add(a: number, b: number) {
        return a + b;
    }

    function addMany(...numbers: number[]) {
        numbers.reduce((p, c) => p + c, 0);
    }

}
