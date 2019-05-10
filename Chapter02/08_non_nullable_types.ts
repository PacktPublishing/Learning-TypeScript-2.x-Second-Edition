// Don't forget to ENABLE strictNullChecks or strict in tsconfig.json
namespace nullable_types_demo {

    let name: string;
    name = "Remo"; // OK
    name = null; // Error
    name = undefined; // Error

    let age: number;
    age = 28; // OK
    age = null; // Error
    age = undefined; // Error

    let person: { name: string, age: number};
    person = { name: "Remo", age: 28 }; // OK
    person = { name: null, age: null }; // Error
    person = { name: undefined, age: undefined }; // Error
    person = null; // Error
    person = undefined; // Error

}