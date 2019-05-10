namespace weak_type_dmeo {

    interface User {
        name?: string;
        age?: number;
    }

    let user1: User  = { name: "Remo", age: 28 }; // OK
    let user2: User = { firstName: "Remo", yearBorn: 28 }; // Error

}
