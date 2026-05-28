import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordIsEqual(group: AbstractControl): ValidationErrors | null {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;

    return password === confirmPassword ? null : {passwordsDiffers : true}
}
