namespace mapped_types_demo {

    type Keyify<T> = {
        [P in keyof T]: P;
    };

    function getKeys<T>(obj: T): Keyify<T> {
        const keysArr = Object.keys(obj);
        const stringifyObj = keysArr.reduce((p, c, i, a) => {
            return {
                ...p,
                [c]: c
            };
        }, {});
        return stringifyObj as Keyify<T>;
    }

    interface User {
        name: string;
        age: number;
    }

    let user: User = { name: "Remo", age: 28 };
    let keys = getKeys<User>(user);

    console.log(keys.name); // "name"
    console.log(keys.age); // "age"

    // Make all properties in T optional
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };

    // Make all properties in T readonly
    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    };

    // From T pick a set of properties K
    type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    // Construct a type with a set of properties K of type T
    type Record<K extends string, T> = {
        [P in K]: T;
    };

}
