namespace geometry_demo {

    export interface IVector2dInterface {
        toArray(callback: (x: number[]) => void): void;
        length(): number;
        normalize(): void;
    }

    export class Vector2d implements IVector2dInterface {
        private _x: number;
        private _y: number;
        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }
        public toArray(callback: (x: number[]) => void): void {
            callback([this._x, this._y]);
        }
        public length(): number {
            return Math.sqrt(
                this._x * this._x + this._y * this._y
            );
        }
        public normalize() {
            let len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        }
    }

}

let vector: geometry_demo.IVector2dInterface = new geometry_demo.Vector2d(2,3);
vector.normalize();
vector.toArray(function(vectorAsArray: number[]){
    console.log(`x: ${vectorAsArray[0]}, y: ${vectorAsArray[1]}`);
});
