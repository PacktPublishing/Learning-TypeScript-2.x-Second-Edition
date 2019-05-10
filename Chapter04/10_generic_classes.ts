namespace not_generic_classes_demo {

    class User {
        public name!: string;
        public surname!: string;
    }

    class UserQueue {
        private _items: User[] = [];
        public push(item: User) {
            this._items.push(item);
        }
        public pop() {
            return this._items.shift();
        }
        public size() {
            return this._items.length;
        }
    }

    const userQueue = new UserQueue();
    userQueue.push({ name: "Remo", surname: "Jansen" });
    userQueue.push({ name: "John", surname: "Smith" });
    const remo = userQueue.pop();
    const john = userQueue.pop();

    class Car {
        public manufacturer!: string;
        public model!: string;
    }

    class CarQueue {
        private _items: Car[] = [];
        public push(item: Car) {
            this._items.push(item);
        }
        public pop() {
            return this._items.shift();
        }
        public size() {
            return this._items.length;
        }
    }

    const carQueue = new CarQueue();
    carQueue.push({ manufacturer: "BMW", model: "M3" });
    carQueue.push({ manufacturer: "Tesla", model: "S" });
    const bmw = carQueue.pop();
    const tesla = carQueue.pop();

}

namespace class_with_any_demo {

    class Queue {
        private _items: any[] = [];
        public push(item: any) {
            this._items.push(item);
        }
        public pop() {
            return this._items.shift();
        }
        public size() {
            return this._items.length;
        }
    }    

}

namespace generic_classes_demo {

    class Queue<T> {
        private _items: T[] = [];
        public push(item: T) {
            this._items.push(item);
        }
        public pop() {
            return this._items.shift();
        }
        public size() {
            return this._items.length;
        }
    }

    class User {
        public name!: string;
        public surname!: string;
    }

    const userQueue = new Queue<User>();
    userQueue.push({ name: "Remo", surname: "Jansen" });
    userQueue.push({ name: "John", surname: "Smith" });
    const remo = userQueue.pop();
    const john = userQueue.pop();

    class Car {
        public manufacturer!: string;
        public model!: string;
    }

    const carQueue = new Queue<Car>();
    carQueue.push({ manufacturer: "BMW", model: "M3" });
    carQueue.push({ manufacturer: "Tesla", model: "S" });
    const bmw = carQueue.pop();
    const tesla = carQueue.pop();

}
