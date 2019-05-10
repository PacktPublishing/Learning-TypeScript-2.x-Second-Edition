// Remember to enable
// "lib": [ "es2015.promise", "dom", "es5", "es2015.generator", "es2015.iterable" ]
// "downlevelIteration": true
// in tsconfig.json
namespace async_iterator_demo {

    let counter = 0;

    function doSomethingAsync() {
        return new Promise<number>((r) => {
            setTimeout(() => {
                counter += 1;
                r(counter);
            }, 1000);
        });
    }

    async function* g1() {
        yield await doSomethingAsync();
        yield await doSomethingAsync();
        yield await doSomethingAsync();
    }

    async function func() {
        for await (const x of g1()) {
            console.log(x);
        }
    }

}
