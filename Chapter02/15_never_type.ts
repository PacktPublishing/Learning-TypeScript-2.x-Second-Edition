namespace never_type_demo {

    function error(message: string): never {
        throw new Error(message);
    }

    // Type () => never
    const sing = function() {
        while (true) {
            console.log("I will never return!");
        }
    };

    interface Square {
        kind: "square";
        size: number;
    }

    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }

    interface Circle {
        kind: "circle";
        radius: number;
    }

    type Shape = Square | Rectangle | Circle;

    function area(shape: Shape) {
        const PI = Math.PI;
        switch (shape.kind) {
            case "square": return shape.size * shape.size;
            case "rectangle": return shape.width * shape.height;
            case "circle": return PI * shape.radius * shape.radius;
            default:
                return shape; // never
        }
    }

}
