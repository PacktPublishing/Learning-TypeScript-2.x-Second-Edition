namespace bind_demo {

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

    const person = new Person("Remo", "Jansen");
    const greet = person.greet.bind(person);

    greet.call(person, "Seville", "Spain");
    greet.apply(person, ["Seville", "Spain"]);

    greet.call(null, "Seville", "Spain");
    greet.apply(null, ["Seville", "Spain"]);

    const valueOfThis = { name: "anakin", surname: "skywalker" };
    greet.call(valueOfThis, "Mos espa", "Tatooine");
    greet.apply(valueOfThis, ["Mos espa", "Tatooine"]);

}
