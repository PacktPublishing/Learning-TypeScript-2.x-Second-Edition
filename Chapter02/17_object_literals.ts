namespace object_literal_demo {

    let person1 = { name: "Remo", age: 28 };

    interface User {
        name: string;
        age: number;
    }

    let person2: User = { name: "Remo", age: 28 }; // OK
    let person3: User = { name: "Remo" }; // Error

    interface UserWithOptionalProperties {
        name: string;
        age?: number;
    }

    let person4: UserWithOptionalProperties = { name: "Remo", age: 28 }; // OK
    let person5: UserWithOptionalProperties = { name: "Remo" }; // OK

}
