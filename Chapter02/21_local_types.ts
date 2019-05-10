namespace local_type_demo {

    interface Person {
        name: string;
        age: number;
    }

    function makePerson(employeeName: string, employeeAge: number): Person {

        // Local type
        class Employee implements Person {
            constructor(
                public name: string,
                public age: number
            ) {}
        }

        return new Employee(employeeName, employeeAge);

    }

    let user = makePerson("Remo", 28);

}
