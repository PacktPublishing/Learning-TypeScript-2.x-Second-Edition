namespace access_modifiers_public {

    class Person {
        public name: string;
        public surname: string;
        public email: string;
        public constructor(
            name: string, surname: string, email: string
        ) {
            this.email = email;
            this.name = name;
            this.surname = surname;
        }
        public greet() {
            console.log("Hi!");
        }
    }

    class Teacher extends Person {
        public teach() {
            console.log("Welcome to class!");
        }
    }

    const person = new Person(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    const teacher = new Teacher(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    console.log(person.email); // ""remo.jansen@wolksoftware.com"
    console.log(teacher.email); // ""remo.jansen@wolksoftware.com"

}

namespace access_modifiers_private_1 {

    class Person {
        public name: string;
        public surname: string;
        private _email: string;
        public constructor(
            name: string, surname: string, email: string
        ) {
            this._email = email;
            this.name = name;
            this.surname = surname;
        }
        public greet() {
            console.log("Hi!");
        }
        public getEmail() {
            return this._email;
        }
    }

    class Teacher extends Person {
        public teach() {
            console.log("Welcome to class!");
        }
        public shareEmail() {
            console.log(`My email is ${this._email}`); // Error
        }
    }

    const person = new Person(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    const teacher = new Teacher(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    console.log(person._email); // Error
    console.log(teacher._email); // Error
    teacher.getEmail();

}

namespace access_modifiers_private_2 {

    class Person {
        public name: string;
        public surname: string;
        private _email: string;
        public constructor(
            name: string, surname: string, email: string
        ) {
            this._email = email;
            this.name = name;
            this.surname = surname;
        }
        public greet() {
            console.log("Hi!");
        }
        public getEmail() {
            return this._email;
        }
    }

    class Teacher extends Person {
        public teach() {
            console.log("Welcome to class!");
        }
        public shareEmail() {
            console.log(`My email is ${this.getEmail()}`); // OK
        }
    }

    const person = new Person(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    const teacher = new Teacher(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    console.log(person._email); // Error
    console.log(teacher._email); // Error
    person.getEmail(); // "remo.jansen@wolksoftware.com"
    teacher.shareEmail(); // "My email is remo.jansen@wolksoftware.com"

}

namespace access_modifiers_protected {

    class Person {
        public name: string;
        public surname: string;
        protected _email: string;
        public constructor(
            name: string, surname: string, email: string
        ) {
            this._email = email;
            this.name = name;
            this.surname = surname;
        }
        public greet() {
            console.log("Hi!");
        }
    }

    class Teacher extends Person {
        public teach() {
            console.log("Welcome to class!");
        }
        public shareEmail() {
            console.log(`My email is ${this._email}`);
        }
    }

    const person = new Person(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    const teacher = new Teacher(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    console.log(person._email); // Error
    console.log(teacher._email); // Error
    teacher.shareEmail(); // "My email is remo.jansen@wolksoftware.com"

}
