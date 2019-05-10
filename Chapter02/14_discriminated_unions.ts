namespace discriminated_unions_demo {

    interface Cube {
        kind: "cube";
        size: number;
    }

    interface Pyramid {
        kind: "pyramid";
        width: number;
        length: number;
        height: number;
    }

    interface Sphere {
        kind: "sphere";
        radius: number;
    }

    type Shape = Cube | Pyramid | Sphere;

    function volume(shape: Shape) {
        const PI = Math.PI;
        switch (shape.kind) {
            case "cube":
                return shape.size ** 3;
            case "pyramid":
                return (shape.width * shape.height * shape.length) / 3;
            case "sphere":
                return (4 / 3) * PI * (shape.radius ** 3);
        }
    }

}
