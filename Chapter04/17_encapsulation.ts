namespace encapsulation_demo {

    class Email {
        private _email: string;
        public constructor(email: string) {
            if (this._validateEmail(email)) {
                this._email = email;
            } else {
                throw new Error("Invalid email!");
            }
        }
        public toString(): string {
            return this._email;
        }
        private _validateEmail(email: string) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    }

    class Person {
        public name: string;
        public surname: string;
        public email: Email;
        public constructor(
            name: string, surname: string, email: Email
        ) {
            this.email = email;
            this.name = name;
            this.surname = surname;
        }
        public greet() {
            console.log(
                `Hi! I'm ${this.name},
                you can reach me at ${this.email.toString()}`
            );
        }
    }

    let person: Person = new Person(
        "Remo",
        "Jansen",
        new Email("remo.jansen@wolksoftware.com")
    );

}
