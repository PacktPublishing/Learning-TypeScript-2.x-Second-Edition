// Don't forget to disable strictNullChecks or strict in tsconfig.json
namespace intersection_types_demo {

    interface A { a: string }
    interface B { b: string }
    interface C { c: string }
    declare let abc: A & B & C;
    abc.a = "hello"; // OK
    abc.b = "hello"; // OK
    abc.c = "hello"; // OK
    abc.d = "hello"; // Error

    interface X { x: A }
    interface Y { x: B }
    interface Z { x: C }
    declare let xyz: X & Y & Z;
    xyz.x.a = "hello"; // OK
    xyz.x.b = "hello"; // OK
    xyz.x.c = "hello"; // OK
    xyz.x.d = "hello"; // Error

    type F1 = (x: string) => string;
    type F2 = (x: number) => number;
    declare let f: F1 & F2;
    let s = f("hello"); // OK
    let n = f(42); // OK
    let t = f(true); // Error

    interface Supplier {
        orderItems(): void;
        getAddress(): void;
    }

    interface Customer {
        sellItems(): void;
        getAddress(): void;
    }

    declare let person: Supplier & Customer;
    person.getAddress(); // OK
    person.orderItems(); // OK
    person.sellItems();  // OK

}
