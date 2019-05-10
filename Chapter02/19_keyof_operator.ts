namespace keyof_operator_demo {

    interface User {
        name: string;
        age: number;
    }

    type userKeys1 = keyof User; // "name" | "age"

    let person = { name: "Remo", age: "28" };
    type userKeys2 = keyof typeof person; // "name" | "age"

}
