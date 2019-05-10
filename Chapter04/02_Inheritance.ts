namespace inheritance {

    class Person {
        public name: string;
        public surname: string;
        public email: string;
        public constructor(name: string, surname: string, email: string) {
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

    person.greet(); // "Hi!"
    teacher.greet(); // "Hi!"
    person.teach(); // Error : Property 'teach' does not exist on type 'Person'
    teacher.teach(); // "Welcome to class!"

    class SchoolPrincipal extends Teacher {
        public manageTeachers() {
            return console.log("We need to help our students!");
        }
    }

    const principal = new SchoolPrincipal(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

    principal.greet(); // "Hi!"
    principal.teach(); // "Welcome to class!"
    principal.manageTeachers(); // "We need to help our students!"

}
