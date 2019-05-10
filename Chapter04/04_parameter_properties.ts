namespace parameter_properties_demo_1 {

    class Vector {
        private x: number;
        private y: number;
        public constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

}

namespace parameter_properties_demo_1 {

    class Vector {
        public constructor(
            private x: number,
            private y: number
        ) {}
    }

}
