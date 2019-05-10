namespace function_types_demo {

    function greetNamed(name?: string): string {
        return `Hi! ${name}`;
    }

    let greetUnnamed1: (name: string) => string;

    greetUnnamed1 = function(name: string): string {
        return `Hi! ${name}`;
    };

    let greetUnnamed2: (name: string) => string = function(name: string): string {
        return `Hi! ${name}`;
    };

}
