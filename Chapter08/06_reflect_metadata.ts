import "reflect-metadata";

namespace reflect_metadata_demo1 {

    function logType(target: any, key: string) {
        const type = Reflect.getMetadata("design:type", target, key);
        console.log(`${key} type: ${type.name}`);
    }

    class Demo {
        @logType
        public attr1: string;
        public constructor(attr1: string) {
            this.attr1 = attr1;
        }
    }

}

namespace reflect_metadata_demo2 {

    function logParamTypes(target: any, key: string) {
        const types = Reflect.getMetadata(
            "design:paramtypes",
            target,
            key
        );
        const s = types.map((a: any) => a.name).join();
        console.log(`${key} param types: ${s}`);
    }

    class Foo {}
    interface FooInterface {}

    class Demo {
        @logParamTypes
        public doSomething(
          param1: string,
          param2: number,
          param3: Foo,
          param4: { test: string },
          param5: FooInterface,
          param6: Function,
          param7: (a: number) => void
        ): number {
          return 1;
        }
    }

    // doSomething param types: String, Number, Foo, Object, Object, Function, Function

}

namespace reflect_metadata_demo3 {

    function logReturntype(target: any, key: string) {
        const returnType = Reflect.getMetadata(
            "design:returntype",
            target,
            key
        );
        console.log(`${key} return type: ${returnType.name}`);
    }

    class Demo {
        @logReturntype
        public doSomething2(): string {
            return "test";
        }
    }

    // doSomething2 return type: String

}
