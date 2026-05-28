import { AbstractControl, ValidationErrors } from "@angular/forms";


export function cpfValid(control: AbstractControl): ValidationErrors | null {

    const value = control.value as string;
    
    if(!value) return null;

    const isValid = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(value);

    return isValid ? null : { cpfInvalid: true}
}