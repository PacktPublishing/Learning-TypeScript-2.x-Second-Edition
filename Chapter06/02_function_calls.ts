namespace function_calls {

    class Person {

        public name: string;
        public surname: string;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        public greet(city: string, country: string) {
            // we use the “this” operator to access name and surname 
            let msg = `Hi, my name is ${this.name} ${this.surname}.`;
            msg += `I'm from ${city} (${country}).`;
            console.log(msg);
        }

    }

    const person = new Person("remo", "jansen");
    person.greet("Seville", "Spain");

    person.greet.call(person, "seville", "Spain");
    person.greet.apply(person, ["seville", "Spain"]);

    person.greet.call(null, "seville", "Spain");
    person.greet.apply(null, ["seville", "Spain"]);

    const valueOfThis = { name : "anakin", surname : "skywalker" };
    person.greet.call(valueOfThis, "mos espa", "tatooine");
    person.greet.apply(valueOfThis, ["mos espa", "tatooine"]);

}
