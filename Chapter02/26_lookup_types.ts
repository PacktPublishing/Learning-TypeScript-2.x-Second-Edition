namespace lookup_types_demo {

    function filterByProperty<T, K extends keyof T>(
        property: K, entities: T[], value: T[K]
    ) {
        return entities.filter((e) => e[property] === value);
    }

    interface User {
        surname: string;
        age: number;
    }

    const users = [
        { surname: "Smith", age: 28 },
        { surname: "Johnson", age: 55 },
        { surname: "Williams", age: 14 }
    ];

    filterByProperty<User, "age">("age", users, 21);
    filterByProperty<User, "surname">("surname", users, "Smith");

}
