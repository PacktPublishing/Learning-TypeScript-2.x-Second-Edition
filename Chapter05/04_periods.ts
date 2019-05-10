namespace period_demo {

    namespace App.Models {
        export class UserModel {
            // ...
        }
        export class TalkModel {
            // ...
        }
    }
    namespace App.Validation {
        export class UserValidator {
            // ...
        }
        export class TalkValidator {
            // ...
        }
    }

    const userModel = new App.Models.UserModel();
    const talkModel = new App.Models.TalkModel();
    const userValidator = new App.Validation.UserValidator();
    const talkValidator = new App.Validation.TalkValidator();

}
