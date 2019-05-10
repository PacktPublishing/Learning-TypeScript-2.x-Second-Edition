namespace CustomException {

    // More info at https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    export class Exception extends Error {

        public constructor(public message: string) {
            super(message);
            // Set the prototype explicitly.
            Object.setPrototypeOf(this, Exception.prototype);
        }
        public sayHello() {
            return `hello ${this.message}`;
        }
    }

}
