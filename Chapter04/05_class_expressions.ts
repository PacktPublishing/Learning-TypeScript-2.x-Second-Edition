namespace class_expressions {

    const Person = class {
        public constructor(
            public name: string,
            public surname: string,
            public email: string
        ) {}
        public greet() {
            console.log("Hi!");
        }
    };

    const person = new Person(
        "Remo",
        "Jansen",
        "remo.jansen@wolksoftware.com"
    );

}
