// Don"t forget to disable strictNullChecks or strict in tsconfig.json
namespace union_types_demo {

    let path: string[]|string;
    path = "/temp/log.xml";
    path = ["/temp/log.xml", "/temp/errors.xml"];
    path = 1; // Error

    interface Supplier {
        orderItems(): void;
        getAddress(): void;
    }

    interface Customer {
        sellItems(): void;
        getAddress(): void;
    }

    declare let person: Supplier | Customer;
    person.getAddress(); // OK
    person.orderItems(); // Error
    person.sellItems();  // Error

}
