namespace App {
    export namespace Validation {
        export class UserValidator {
            // ...
        }

        export class TalkValidator {
            // ...
        }
    }
}

// models is defined in the previous file
const userModel = new App.Models.UserModel();
const talkModel = new App.Models.TalkModel();
const userValidator = new App.Validation.UserValidator();
const talkValidator = new App.Validation.TalkValidator();

import TalkValidator = App.Validation.TalkValidator;
const talkValidator1 = new TalkValidator();
