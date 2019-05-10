interface Comparable<T> {
    equals(value: T): boolean;
}

function isEqual<TVal, T extends Comparable<TVal>>(comparable: T, value: TVal) {
    return comparable.equals(value);
}

interface RectangleInterface {
    width: number;
    height: number;
}

type ComparableRectangle = RectangleInterface & Comparable<RectangleInterface>;

class Rectangle implements ComparableRectangle {
    public width: number;
    public height: number;
    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public equals(value: Rectangle) {
        return value.width === this.width && value.height === this.height;
    }
};

interface CircleInterface {
    radius: number;
}

type ComparableCircle = CircleInterface & Comparable<CircleInterface>;

class Circle implements ComparableCircle {
    public radius: number;
    public constructor(radius: number) {
        this.radius = radius
    }
    public equals(value: CircleInterface): boolean {
        return value.radius === this.radius;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(5, 8);

isEqual<RectangleInterface, ComparableRectangle>(rectangle, { width: 5, height: 8 });
isEqual<CircleInterface, ComparableCircle>(circle, { radius: 5 });
