import { Container, inject, injectable } from "inversify";
import "reflect-metadata";

namespace ioc_demo {

    interface Weapon {
        tryHit(fromDistance: number): boolean;
    }

    @injectable()
    class Katana implements Weapon {
        public tryHit(fromDistance: number) {
            return fromDistance <= 2;
        }
    }

    @injectable()
    class Ninja {
        public constructor(
            @inject("Weapon") private _weapon: Weapon
        ) {}
        public fight(fromDistance: number) {
            return this._weapon.tryHit(fromDistance);
        }
    }

    const container = new Container();
    container.bind<Weapon>("Weapon").to(Katana);
    container.bind<Ninja>("Ninja").to(Ninja);

    const ninja = container.get<Ninja>("Ninja");
    console.log(ninja.fight(2)); // true
    console.log(ninja.fight(5)); // false

}
