import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function restrictedWordsValidator(words: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = (control.value ?? '').toLowerCase();

        const foundWord = words.find((word) => value.includes(word.toLowerCase()));

        return foundWord
            ? {
                restrictedWord: foundWord,
            }
            : null;
    };
}
