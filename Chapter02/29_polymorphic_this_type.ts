namespace polymorphic_this_type_demo {

    interface Person {
        name?: string;
        surname?: string;
        age?: number;
    }

    class PersonBuilder<T extends Person> {
        protected _details: T;
        public constructor() {
            this._details = {} as T;
        }
        public currentValue(): T {
            return this._details;
        }
        public withName(name: string): this {
            this._details.name = name;
            return this;
        }
        public withSurname(surname: string): this {
            this._details.surname = surname;
            return this;
        }
        public withAge(age: number): this {
            this._details.age = age;
            return this;
        }
    }

    let value1 = new PersonBuilder()
                .withName("name")
                .withSurname("surname")
                .withAge(28)
                .currentValue();

    interface Employee extends Person {
        email: string;
        department: string;
    }

    class EmployeeBuilder extends PersonBuilder<Employee> {
        public withEmail(email: string) {
            this._details.email = email;
            return this;
        }
        public withDepartment(department: string) {
            this._details.department = department;
            return this;
        }
    }

    let value2 = new EmployeeBuilder()
        .withName("name")
        .withSurname("surname")
        .withAge(28)
        .withEmail("name.surname@company.com")
        .withDepartment("engineering")
        .currentValue();

}
