namespace optional_properties {

    class Vector {

        public constructor(
            public x: number,
            public y: number,
            public z?: number
        ) {}

        public is3D() {
            return this.z !== undefined;
        }

        public is2D() {
            return this.z === undefined;
        }

    }

    const vector2D = new Vector(0, 0);
    vector2D.is2D(); // true
    vector2D.is3D(); // false

    const lenght1 = Math.sqrt(
        vector2D.x * vector2D.x +
        vector2D.y * vector2D.y +
        vector2D.z * vector2D.z // Error: Object is possibly 'undefined'
    );

    const vector3D = new Vector(0, 0 , 0);
    vector3D.is2D(); // false
    vector3D.is3D(); // true

    const lenght2 = Math.sqrt(
        vector3D.x * vector3D.x +
        vector3D.y * vector3D.y +
        ((vector3D.z !== undefined) ? (vector3D.z * vector3D.z) : 0) // OK
    );

}
