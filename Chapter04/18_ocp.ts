namespace ocp_demo {

    class Rectangle {
        public width!: number;
        public height!: number;
    }

    class AreaCalculator {
        public area(shapes: Rectangle[] ) {
            return shapes.reduce(
                (p, c) => {
                    return p + (c.height * c.width);
                },
                0
            );
        }
    }

}

namespace ocp_demo_2 {

    class Rectangle {
        public width!: number;
        public height!: number;
    }

    class Circle {
        public radius!: number;
    }

    class AreaCalculator {
        public area(shapes: Array<Rectangle|Circle>) {
            return shapes.reduce(
                (p, c) => {
                    if (c instanceof Rectangle) {
                        return p + (c.width * c.height);
                    } else {
                        return p + (c.radius * c.radius * Math.PI);
                    }
                },
                0
            );
        }
    }

}

namespace ocp_demo_3 {

    abstract class Shape {
        public abstract area(): number;
    }

    class Rectangle extends Shape {
        public width!: number;
        public height!: number;
        public area() {
            return this.width * this.height;
        }
    }

    class Circle implements Shape {
        public radius!: number;
        public area() {
            return (this.radius * this.radius * Math.PI);
        }
    }

    class AreaCalculator {
        public area(shapes: Shape[]) {
            return shapes.reduce(
                (p, c) => p + c.area(),
                0
            );
        }
    }

}
