namespace chain {

    class Base {
        public method1() { return 1; }
        public method2() { return 2; }
    }

    class Derived extends Base {
        public method2() { return 3; }
        public method3() { return 4; }
    }

}
