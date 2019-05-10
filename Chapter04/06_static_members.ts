namespace static_classes_demo_1 {

    class TemperatureConverter {

        public static CelsiusToFahrenheit(
            celsiusTemperature: number
        ) {
            return (celsiusTemperature * 9 / 5) + 32;
        }

        public static FahrenheitToCelsius(
            fahrenheitTemperature: number
        ) {
            return (fahrenheitTemperature - 32) * 5 / 9;
        }

    }

    let fahrenheit = 100;
    let celsius = TemperatureConverter.FahrenheitToCelsius(fahrenheit);
    fahrenheit = TemperatureConverter.CelsiusToFahrenheit(celsius);

}

namespace static_class_demo_2 {

    class Vector3 {

        public static GetDefault() {
            return new Vector3(0, 0, 0);
        }

        public constructor(
            private _x: number,
            private _y: number,
            private _z: number
        ) {}

        public length() {
            return Math.sqrt(
                this._x * this._x +
                this._y * this._y +
                this._z * this._z
            );
        }

        public normalize() {
            let len = 1 / this.length();
            this._x *= len;
            this._y *= len;
            this._z *= len;
        }

    }

    const vector1 = Vector3.GetDefault();
    vector1.normalize();

    const vector2 = new Vector3(1, 1, 1);
    vector2.normalize();

}
