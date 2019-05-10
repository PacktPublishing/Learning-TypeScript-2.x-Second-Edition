namespace prototypes {

    class Person {

        public name: string;
        public surname: string;
        public age: number = 0;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        public greet() {
            var msg = `Hi! my name is ${this.name} ${this.surname}`;
            msg += `I'm ${this.age}`;
        }

    }

    class SuperHero extends Person {
        public superpower: string;
        public constructor(
            name: string,
            surname: string,
            superpower: string
        ) {
           super(name, surname);
           this.superpower = superpower;
        }
        public userSuperPower() {
            return `I'm using my ${this.superpower}`;
        }
    }

}
