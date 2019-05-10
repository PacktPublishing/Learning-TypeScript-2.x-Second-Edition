namespace covariant_callbacks {

    declare function someFunc(
        callback: (
        nestedCallback: (error: number, result: any) => void
        ) => void
    ): void;

    someFunc(
        (
            nestedCallback: (e: number) => void // Error
        ) => {
            nestedCallback(1);
        }
    );

    someFunc(
        (
            nestedCallback: (e: number, result: any) => void // OK
        ) => {
            nestedCallback(1, 1);
        }
    );

}

namespace covariant_promises {

    let p: Promise<number> = new Promise((res, rej) => {
        res("error"); // Error
    });

}
