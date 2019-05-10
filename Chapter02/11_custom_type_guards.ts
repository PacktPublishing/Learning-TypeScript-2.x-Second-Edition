namespace custom_type_guard_demo_1 {

    interface Supplier {
        orderItems(): void;
        getAddress(): void;
    }

    interface Customer {
        sellItems(): void;
        getAddress(): void;
    }

    function isSupplier(person: Supplier | Customer): person is Supplier {
        return (<Supplier> person).orderItems !== undefined;
    }

    function handleItems(person: Supplier | Customer) {
        if (isSupplier(person)) {
            person.orderItems(); // OK
        } else {
            person.sellItems(); // OK
        }
    }

}

namespace custom_type_guard_demo_2 {

    class Supplier {
        public orderItems(): void {
            // do something...
        }
        public getAddress(): void {
            // do something...
        }
    }

    class Customer {
        public sellItems(): void {
            // do something...
        }
        public getAddress(): void {
            // do something...
        }
    }

    function isSupplier(person: Supplier | Customer): person is Supplier {
        return person instanceof Supplier;
    }

    function handleItems(person: Supplier | Customer) {
        if (isSupplier(person)) {
            person.orderItems(); // OK
        } else {
            person.sellItems(); // OK
        }
    }

}

namespace custom_type_guard_demo_2 {

    function doSomething(x: number | string) {
        if (typeof x === "string") {
            console.log(x.subtr(1)); // Error
            console.log(x.substr(1)); // OK
        }
        x.substr(1); // Error
    }

}

namespace custom_type_guard_demo_3 {

    interface Cat {
        meow(): void;
    }

    interface Dog {
        woof(): void;
    }

    function doSomething(obj: Cat | Dog) {
        if ("meow" in obj) {
            obj.meow(); // OK
        } else {
            obj.woof(); // OK
        }
    }

}
