namespace classes_demo {

  class Character {
    public fullname: string;
    public constructor(firstname: string, lastname: string) {
      this.fullname = `${firstname} ${lastname}`;
    }
    public greet(name?: string) {
      if (name) {
        return `Hi! ${name}! my name is ${this.fullname}`;
      } else {
        return `Hi! my name is ${this.fullname}`;
      }
    }
  }

  let spark = new Character("Jacob", "Keyes");
  let msg = spark.greet();
  console.log(msg); // "Hi! my name is Jacob Keyes"

  let msg1 = spark.greet("Dr. Halsey");
  console.log(msg1); // "Hi! Dr. Halsey! my name is Jacob Keyes"

}
