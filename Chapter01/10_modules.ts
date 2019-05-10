namespace module_demo {

    namespace geometry {

        interface VectorInterface {
            /* ... */
        }

        export interface Vector2dInterface {
            /* ... */
        }

        export interface Vector3dInterface {
            /* ... */
        }

        export class Vector2d
            implements VectorInterface, Vector2dInterface {
            /* ... */
        }

        export class Vector3d implements VectorInterface, Vector3dInterface {
            /* ... */
        }

    }

    let vector2dInstance: geometry.Vector2dInterface = new geometry.Vector2d();
    let vector3dInstance: geometry.Vector3dInterface = new geometry.Vector3d();

}
