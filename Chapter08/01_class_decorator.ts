import { logClass } from "./decorators"

namespace class_decorator_demo {

    @logClass
    class Person {

        public name: string;
        public surname: string;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        public saySomething(something: string): string {
            return `${this.name} ${this.surname} says: ${something}`;
        }

    }

    const person = new Person("Michael", "Jackson");
    // New: Person

}
