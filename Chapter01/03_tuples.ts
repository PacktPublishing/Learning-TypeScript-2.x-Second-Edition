namespace tuples_demo {

    let x: [string, number];
    x = ["hello", 10]; // OK
    x = ["world", 20]; // OK
    x = [10, "hello"]; // Error
    x = [20, "world"]; // Error

}
