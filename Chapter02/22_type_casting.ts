namespace type_casting_demo {

    interface SomeType {
        // ...
    }

    let myObject: SomeType;
    let otherObject: any;
    myObject = <SomeType> otherObject; // Using <>
    myObject = otherObject as SomeType; // Using as keyword

}
