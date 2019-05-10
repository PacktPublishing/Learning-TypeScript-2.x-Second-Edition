// Don't forget to disable strictNullChecks or strict in tsconfig.json
namespace nullable_types_demo {

    let name: string;
    name = "Remo"; // OK
    name = null; // OK
    name = undefined; // OK

    let age: number;
    age = 28; // OK
    age = null; // OK
    age = undefined; // OK

    let person: { name: string, age: number};
    person = { name: "Remo", age: 28 }; // OK
    person = { name: null, age: null }; // OK
    person = { name: undefined, age: undefined }; // OK
    person = null;       // OK
    person = undefined;  // OK

}
