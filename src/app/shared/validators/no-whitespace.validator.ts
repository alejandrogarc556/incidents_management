import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value ?? '';

        const valid = value.trim().length > 0;

        return valid
            ? null
            : {
                whitespace: true,
            };
    };
}
