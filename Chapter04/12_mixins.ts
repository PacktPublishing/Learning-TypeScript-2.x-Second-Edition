namespace mixins_demo_1 {

    class Animal {
        public eat() {
            // ...
        }
    }

    class Mammal extends Animal {
        public breath() {
            // ...
        }
    }

    class WingedAnimal extends Animal {
        public fly() {
            // ...
        }
    }

    // Error: Classes can only extend a single class.
    class Bat extends WingedAnimal, Mammal {
        // ...
    }

}

namespace mixins_demo_2 {

    class Animal {
        public eat() {
            return "I need food!";
        }
    }

    class Mammal {
        public breath(): string {
            return "I'm alive!";
        }
    }

    class WingedAnimal {
        public fly(): string {
            return "I can fly!";
        }
    }

    class Bat implements Mammal, WingedAnimal {
        public breath!: () => string;
        public fly!: () => string;
    }

    function applyMixins(derived: any, bases: any[]) {
        bases.forEach(base => {
            const props = Object.getOwnPropertyNames(base.prototype);
            props.forEach(name => {
                if (name !== "constructor") {
                    derived.prototype[name] = base.prototype[name];
                }
            });
        });
    }

    applyMixins(Bat, [Mammal, WingedAnimal]);

    const bat = new Bat();
    bat.breath(); // "I'm alive!"
    bat.fly(); // "I can fly!"

}

namespace mixins_demo_3 {

    class Animal {
        public eat() {
            return "I need food!";
        }
    }

    class Mammal extends Animal {
        public breath() {
            return "I'm alive!";
        }
        public move() {
            return "I can move like a mammal!";
        }
    }

    class WingedAnimal extends Animal {
        public fly() {
            return "I can fly!";
        }
        public move() {
            return "I can move like a bird!";
        }
    }

    class Bat implements Mammal, WingedAnimal {
        public eat!: () => string;
        public breath!: () => string;
        public fly!: () => string;
        public move!: () => string;
    }

    function applyMixins(derived: any, bases: any[]) {
        bases.forEach(base => {
            const props = Object.getOwnPropertyNames(base.prototype);
            props.forEach(name => {
                if (name !== "constructor") {
                    derived.prototype[name] = base.prototype[name];
                }
            });
        });
    }

    applyMixins(Bat, [Mammal, WingedAnimal]);

    const bat = new Bat();
    bat.eat(); // Error: bat.eat is not a function
    bat.breath(); // "I'm alive!"
    bat.fly(); // "I can fly!"

}
