namespace functions_demo {

    // named function
    function greet1(name?: string): string {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    }

    // anonymous function
    let greet2 = function(name?: string): string {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    };

    let greet3 = (name: string): string =>  {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    };

    let greet4: (name: string) => string = function(name: string): string {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    };

    function add(
        a: number, b: number, callback: (result: number) => void
    ) {
        callback(a + b);
    }

}
