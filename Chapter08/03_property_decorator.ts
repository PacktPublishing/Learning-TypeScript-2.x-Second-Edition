import { logProperty } from "./decorators";

namespace method_decorator_demo {

    class Person {

        @logProperty
        public name: string;

        @logProperty
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
    // Set: name => Michael
    // Set: surname => Jackson

    person.saySomething("Annie, are you ok?");
    // Get: name => Michael
    // Get: surname => Jackson

}
