namespace decorator_option {

    function logClass(option: string) {
        return function(target: any) {
            // class decorator logic goes here
            // we have access to the decorator
            // parameters and target
            console.log(`Decorating ${target.name} with ${option}`);
        };
    }

    @logClass("some option")
    class Person {}

    // Decorating Person with some option

}
