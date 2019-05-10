namespace interfaces_demo {

    interface LoggerInterface {
        log(arg: any): void;
    }

    class Logger implements LoggerInterface {
        public log(arg: any) {
            if (typeof console.log === "function") {
                console.log(arg);
            } else {
                console.log(arg);
            }
        }
    }

    interface UserInterface {
        name: string;
        password: string;
    }

    // Error property password is missing
    let user: UserInterface = {
        name: ""
    };

}
