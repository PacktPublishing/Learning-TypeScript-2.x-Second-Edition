// Don't forget to disable strictNullChecks or strict in tsconfig.json
namespace structural_type_system_demo {

  interface Person {
    name: string;
    surname: string;
  }

  function getFullName(person: Person) {
    return `${person.name} ${person.surname}`;
  }

  class Employer {
    constructor(
      public name: string,
      public surname: string
    ) {}
  }

  getFullName(new Employer("remo", "jansen")); // OK

  const p1 = { name: "remo", surname: "jansen" };
  getFullName(p1); // OK

  const p2 = { name: "remo", familyName: "jansen" };
  getFullName(p2); // Error

}
