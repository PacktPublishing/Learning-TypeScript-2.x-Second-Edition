import {
    logClass,
    logProperty,
    readMetadata,
    addMetadata
} from "./decorators";

function decoratorFactory(
    classDecorator: Function,
    propertyDecorator: Function,
    methodDecorator: Function,
    parameterDecorator: Function
) {
    return function (this: any, ...args: any[]) {
        const nonNullableArgs = args.filter(a => a !== undefined);
        switch (nonNullableArgs.length) {
            case 1:
                return classDecorator.apply(this, args);
            case 2:
                // break instead of return as property
                // decorators don't have a return
                propertyDecorator.apply(this, args);
                break;
            case 3:
                if (typeof args[2] === "number") {
                    parameterDecorator.apply(this, args);
                } else {
                    return methodDecorator.apply(this, args);
                }
                break;
            default:
                throw new Error("Decorators are not valid here!");
        }
    };
}

namespace decorator_factory_demo {

    const log = decoratorFactory(
        logClass,
        logProperty,
        readMetadata,
        addMetadata
    );

    @log
    class Person {

        @log
        public name: string;
        public surname: string;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        @log
        public saySomething(@log something: string): string {
            return `${this.name} ${this.surname} says: ${something}`;
        }
    }

    const person = new Person("Michael", "Jackson");
    person.saySomething("Annie, are you ok?");
    // New: Person
    // Set: name => Michael
    // saySomething arg[0]: "Annie, are you ok?"
    // Get: name => Michael

}
