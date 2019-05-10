import { logMethod } from "./decorators";

namespace method_decorator_demo {

    class Person {

        public name: string;
        public surname: string;
    
        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }
    
        @logMethod
        public saySomething(something: string): string {
            return `${this.name} ${this.surname} says: ${something}`;
        }
    
    }

    const person = new Person("Michael", "Jackson");
    person.saySomething("Annie, are you ok?");
    // Call: saySomething("Annie, are you ok?") => "Michael Jackson says: Annie, are you ok?"

}
