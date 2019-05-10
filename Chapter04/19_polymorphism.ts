namespace polymorphism {

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
