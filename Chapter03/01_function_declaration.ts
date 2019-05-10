namespace function_declaration_demo {

    console.log(greetNamed("John")); // OK
    console.log(greetUnnamed("John")); // Error

    function greetNamed(name: string): string {
        return `Hi! ${name}`;
    }

    let greetUnnamed = function(name: string): string {
        return `Hi! ${name}`;
    };

}
