namespace function_overloading {

    function test(name: string): string; // overloaded signature
    function test(age: number): string; // overloaded signature
    function test(single: boolean): string; // overloaded signature
    function test(value: (string|number|boolean)): string { // implementation signature
        switch (typeof value) {
            case "string":
                return `My name is ${value}.`;
            case "number":
                return `I'm ${value} years old.`;
            case "boolean":
                return value ? "I'm single." : "I'm not single.";
            default:
                throw new Error("Invalid Operation!");
      }
    }

    test("Remo");                // returns "My name is Remo."
    test(26);                    // returns "I'm 26 years old.";
    test(false);                 // returns "I'm not single.";
    test({ custom: "custom" }); // Error

    function test1(name: string): string;
    function test1(age: number): number; // Error
    function test1(single: boolean): string;
    function test1(value: (string|number|boolean)): string {
        switch (typeof value) {
            case "string":
                return `My name is ${value}.`;
            case "number":
                return `I'm ${value} years old.`;
            case "boolean":
                return value ? "I'm single." : "I'm not single.";
            default:
                throw new Error("Invalid Operation!");
        }
    }        

}
