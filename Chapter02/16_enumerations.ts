namespace enumerations_demo {

    enum DirectionEnum {
        Up,
        Down,
        Left,
        Right
    }

    type DirectionUnionType =
        "Up"
        | "Down"
        | "Left"
        | "Right";

    function move(distance: number, direction: DirectionUnionType) {
        // ...
    }

    move(1, "Right"); // Okay
    move(1, "Righ"); // Error!

    enum DirectionStringEnum {
        Up = "Up",
        Down = "Down",
        Left = "Left",
        Right = "Right"
    }

}
