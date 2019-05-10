// Don't forget to disable strictNullChecks or strict in tsconfig.json
namespace type_annotations_demo {

  // (a: any, b: any) => any;
  function add(a, b) {
    return a + b;
  }

  add(2, 3); // 5
  add("2", 3); // "23"

  // (a: number, b: number) => number;
  function annotatedAdd(a: number, b: number): number {
    return a + b;
  }

  annotatedAdd(2, 3); // OK
  annotatedAdd("2", 3); // Error

}