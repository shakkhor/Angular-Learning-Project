import { AbstractControl, ValidationErrors } from '@angular/forms';

import { reject } from 'q';

export class PasswordValidators {

    static passwordsShouldMatch(control: AbstractControl, str?: string) {
        // debugger;
        let newpass = control["_parent"] ? control["_parent"].controls.newPassword.value : "";
        let confirmPassword = control["_parent"] ? control["_parent"].controls.confirmPassword.value : "";
        if (newpass != confirmPassword)
            return { passwordsShouldMatch: true }
        return null;
    }
    static incorrectPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value == "1234") {
                    console.log("matched");
                    resolve(null)
                }

                else {

                    resolve({ incorrectPassword: true });
                }
            }, 50)
        })
    }
}