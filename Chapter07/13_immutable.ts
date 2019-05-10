import * as immutable from "immutable";

// npm install --save immutable

namespace immutable_demo_1 {

    const map1 = immutable.Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set("b", 50);
    console.log(`${map1.get("b")} vs.${map2.get("b")}`);
    // 2 vs. 50

    const nested = immutable.fromJS({ a: { b: { c: [ 3, 4, 5 ] } } });

    const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
    // Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

    console.log(nested2.getIn([ "a", "b", "d" ]));
    // 6

    const nested3 = nested2.updateIn(
        [ "a", "b", "d" ],
        (value: string) => value + 1
    );

    console.log(nested3);
    // Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

    const nested4 = nested3.updateIn(
        [ "a", "b", "c" ],
        (list: number[]) => list.push(6)
    );

    console.log(nested4);
    // Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }

}
