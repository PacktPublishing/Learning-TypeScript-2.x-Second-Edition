namespace dependency_injection_demo {

    class Katana {
        public tryHit(fromDistance: number) {
            return fromDistance <= 2;
        }
    }

    class Ninja {
        public constructor(
            private _katana: Katana
        ) {}
        public fight(fromDistance: number) {
            return this._katana.tryHit(fromDistance);
        }
    }

    const ninja = new Ninja(new Katana());
    ninja.fight(2); // true
    ninja.fight(5); // false

}

namespace dependency_inversion_demo {

    interface Weapon {
        tryHit(fromDistance: number): boolean;
    }

    class Katana implements Weapon {
        public tryHit(fromDistance: number) {
            return fromDistance <= 2;
        }
    }

    class Ninja {
        public constructor(
            private _weapon: Weapon
        ) {}
        public fight(fromDistance: number) {
            return this._weapon.tryHit(fromDistance);
        }
    }

    const ninja = new Ninja(new Katana());
    ninja.fight(2); // true
    ninja.fight(5); // false

}
