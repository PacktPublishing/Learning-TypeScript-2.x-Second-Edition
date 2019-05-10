namespace srp {

    class GodPerson {
        public name: string;
        public surname: string;
        public email: string;
        public constructor(
            name: string, surname: string, email: string
        ) {
            this.surname = surname;
            this.name = name;
            if (this.validateEmail(email)) {
                this.email = email;
            } else {
                throw new Error("Invalid email!");
            }
        }
        public validateEmail(email: string) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        public greet() {
            console.log(
                `Hi! I'm ${this.name},
                you can reach me at ${this.email}`
            );
        }
    }

    class Email {
        public static validateEmail(email: string) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    }

    class Person {
        public name: string;
        public surname: string;
        public email: string;
        public constructor(
            name: string, surname: string, email: string
        ) {
            if (Email.validateEmail(email) === false) {
                throw new Error("Invalid email!");
            }
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

}
