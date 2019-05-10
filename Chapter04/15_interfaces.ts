namespace interfaces_demo {

    interface Weapon {
        tryHit(fromDistance: number): boolean;
    }

    class Katana implements Weapon {
        public tryHit(fromDistance: number) {
            return fromDistance <= 2;
        }
    }

    class Shuriken implements Weapon {
        public tryHit(fromDistance: number) {
            return fromDistance <= 15;
        }
    }

}
