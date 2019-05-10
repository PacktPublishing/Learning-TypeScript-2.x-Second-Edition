namespace conditional_types_demo {

    interface Animal {
        live(): void;
    }
    interface Dog extends Animal {
        woof(): void;
    }
    
    type Foo1 = Dog extends Animal ? number : string; // number
    type Bar1 = RegExp extends Dog ? number : string; // string

    type Flatten<T> = T extends any[] ? T[number] : T;

    type arr1 = number[];
    type flattenArr1 = Flatten<arr1>; // number
    
    type arr2 = number[][];
    type flattenArr2 = Flatten<arr2>; // number[]

    type TypedFlatten<T> = T extends Array<infer U> ? U : T;

    // These are all now built into lib.d.ts!

    // Exclude from T those types that are assignable to U
    type Exclude<T, U> = T extends U ? never : T;

    // Extract from T those types that are assignable to U
    type Extract<T, U> = T extends U ? T : never;

    // string[] | number[]
    type Foo2 = Extract<boolean | string[] | number[], any[]>;

    // boolean
    type Bar2 = Exclude<boolean | string[] | number[], any[]>;

    // Exclude null and undefined from T
    type NonNullable<T> = T extends null | undefined ? never : T;

    //  Obtain the return type of a function type
    type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

    type func1 = () => number;
    type returnOfFunc1 = ReturnType<func1>; // number

    // Obtain the return type of a constructor function type
    type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;

}
