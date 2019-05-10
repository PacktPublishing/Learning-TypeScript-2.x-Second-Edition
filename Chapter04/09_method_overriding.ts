namespace method_overriding {

    class Person {
        public constructor(
            public name: string,
            public surname: string,
            public email: string
        ) {}
        public greet() {
            console.log("Hi!");
        }
    }

    class Teacher extends Person {
        public constructor(
            name: string,
            surname: string,
            email: string,
            public subjects: string[]
        ) {
            super(name, surname, email);
            this.subjects = subjects;
        }
        public greet() {
            super.greet();
            console.log("I teach " + this.subjects.join(" & "));
        }
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
        "remo.jansen@wolksoftware.com",
        ["math", "physics"]
    );

    person.greet(); // "Hi!"
    teacher.greet(); // "Hi! I teach math & physics"
    person.teach(); // Error
    teacher.teach(); // "Welcome to class!"

}
