// Don't forget to disable strictNullChecks or strict in tsconfig.json
namespace type_inference_demo {

  // number
  let myVariable1 = 3;

  // string
  let myVariable2 = "Hello";

  // { name: string; surname: string; age: number; }
  let myVariable3 = {
    name: "Remo",
    surname: "Jansen",
    age: 28
  };

  // (a: any, b: any) => any
  function add(a, b) {
    return a + b;
  }

}
