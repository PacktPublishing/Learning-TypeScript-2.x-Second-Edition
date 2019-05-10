namespace mapped_type_modifiers_demo {

    // Creates a type with all the properties in T,
    // but marked both readonly and optional.
    type ReadonlyAndPartial1<T> = {
        readonly [P in keyof T]?: T[P]
    }

    type ReadonlyAndPartial2<T> = {
        +readonly [P in keyof T]+?: T[P];
    }

    type Mutable<T> = {
        -readonly [P in keyof T]: T[P]
    }

    interface Foo {
        readonly abc: number;
        def?: string;
    }

    // 'abc' is no longer read-only, but 'def' is still optional.
    type TotallyMutableFoo = Mutable<Foo>

    // Make all properties in T required
    type Required<T> = {
        [P in keyof T]-?: T[P];
    }

}