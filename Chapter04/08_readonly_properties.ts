namespace readonly_properties_demo_1 {

    class Vector3 {

        public constructor(
            public readonly x: number,
            public readonly y: number,
            public readonly z: number
        ) {}

        public length() {
            return Math.sqrt(
                this.x * this.x +
                this.y * this.y +
                this.z * this.z
            );
        }

        public normalize() {
            let len = 1 / this.length();
            this.x *= len; // Error
            this.y *= len; // Error
            this.z *= len; // Error
        }

    }

}

namespace readonly_properties_demo_2 {

    class Vector3 {

        public constructor(
            public readonly x: number,
            public readonly y: number,
            public readonly z: number
        ) {}

        public length() {
            return Math.sqrt(
                this.x * this.x +
                this.y * this.y +
                this.z * this.z
            );
        }

        public normalize() {
            let len = 1 / this.length();
            return new Vector3(
                this.x * len, // OK
                this.y * len, // OK
                this.z * len  // OK
            );
        }

    }

}
