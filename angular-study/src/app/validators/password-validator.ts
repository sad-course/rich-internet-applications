import { AbstractControl, ValidationErrors } from "@angular/forms";


export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (!value) return null;

    const hasDigit = /\d/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);

    const valid = hasDigit && hasCapitalLetter;

    return valid ? null : {weakPassword: true}
}