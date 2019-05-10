namespace abstract_classes {

    abstract class Department {

        constructor(public name: string) {
        }

        public printName(): void {
            console.log("Department name: " + this.name);
        }

        public abstract printMeeting(): void; // must be implemented in derived classes
    }

    class AccountingDepartment extends Department {

        public constructor() {
            super("Accounting and Auditing"); // constructors in derived classes must call super()
        }

        public printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }

        public generateReports(): void {
            console.log("Generating accounting reports...");
        }
    }

    // OK: Create a reference to an abstract type
    let department: Department;

    // Error: cannot create an instance of an abstract class
    department = new Department();

    // OK: Create and assign a non-abstract subclass
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();

    // Error: Method doesn't exist on declared abstract type
    department.generateReports();

}
