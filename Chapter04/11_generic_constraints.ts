namespace generic_constraints_demo_1 {

    class User {
        public name!: string;
        public surname!: string;
    }

    class Car {
        public manufacturer!: string;
        public model!: string;
    }

    class Queue<T> {
        private _items: T[] = [];
        public push(item: T) {
            if (item instanceof User) {
                if (
                    item.name === "" ||
                    item.surname === ""
                ) {
                    throw new Error("Invalid user");
                }
            }
            if (item instanceof Car) {
                if (
                    item.manufacturer === "" ||
                    item.model === ""
                ) {
                    throw new Error("Invalid car");
                }
            }
            this._items.push(item);
        }
        public pop() {
            return this._items.shift();
        }
        public size() {
            return this._items.length;
        }
    }

    const userQueue = new Queue<User>();
    userQueue.push({ name: "", surname: "" }); // Error
    userQueue.push({ name: "Remo", surname: "" }); // Error
    userQueue.push({ name: "", surname: "Jansen" }); // Error

    const carQueue = new Queue<Car>();
    carQueue.push({ manufacturer: "", model: "" }); // Error
    carQueue.push({ manufacturer: "BMW", model: "" }); // Error
    carQueue.push({ manufacturer: "", model: "M3" }); // Error

}

namespace generic_constraints_demo_2 {

    interface Validatable {
        validate(): void;
    }

    class User implements Validatable {
        public constructor(
            public name: string,
            public surname: string
        ) {}
        public validate() {
            if (
                this.name === "" ||
                this.surname === ""
            ) {
                throw new Error("Invalid Car");
            }
        }
    }

    class Car implements Validatable {
        public constructor(
            public manufacturer: string,
            public model: string
        ) {}
        public validate() {
            if (
                this.manufacturer === "" ||
                this.model === ""
            ) {
                throw new Error("Invalid user");
            }
        }
    }

    class Queue<T extends Validatable> {
        private _items: T[] = [];
        public push(item: T) {
            item.validate();
            this._items.push(item);
        }
        public pop() {
            return this._items.shift();
        }
        public size() {
            return this._items.length;
        }
    }

    const userQueue = new Queue<User>();
    userQueue.push(new User("", "")); // Runtime Error
    userQueue.push(new User("Remo", "")); // Runtime Error
    userQueue.push(new User("", "Jansen")); // Runtime Error

    const carQueue = new Queue<Car>();
    carQueue.push(new Car("", "")); // Runtime Error
    carQueue.push(new Car("BMW", "")); // Runtime Error
    carQueue.push(new Car("", "M3")); // Runtime Error

}

namespace generic_constraints_demo_3 {

    interface Foo {
        doSomething(): void;
    }

    interface Bar {
        doSomethingElse(): void;
    }

    class Example1<T extends Foo, Bar> {
        private prop!: T;
        public doEverything() {
          this.prop.doSomething();
          this.prop.doSomethingElse(); // error
        }
    }

    interface FooBar extends Foo, Bar {}

    class Example2<T extends FooBar> {
        private prop!: T;
        public doEverything() {
            this.prop.doSomething();
            this.prop.doSomethingElse();
        }
    }

}

namespace generic_constraints_demo_4 {

    function factory<T>(T: T) {
        return new T(); // Error
    }

}

namespace generic_constraints_demo_5 {

    function factory<T>(t: { new(): T }) {
        return new t();
    }

    class Foo {
        public name!: "foo";
    }

    class Bar {
        public name!: "bar";
    }

    const foo = factory<Foo>(Foo);
    const bar = factory<Bar>(Bar);

}
