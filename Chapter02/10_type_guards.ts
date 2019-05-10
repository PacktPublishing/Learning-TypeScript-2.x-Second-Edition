namespace type_guards_demo {

    let x: any = { /* ... */ };

    if (typeof x === "string") {
        console.log(x.splice(3, 1)); // Error (x is string)
    }

    x.foo(); // OK (x is any)

}
