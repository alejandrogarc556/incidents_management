import { FormControl } from '@angular/forms';

import { restrictedWordsValidator } from './restricted-words.validator';

describe('restrictedWordsValidator', () => {
    it('should reject restricted words', () => {
        const control = new FormControl('virus detection');
        const result = restrictedWordsValidator(['virus', 'hack'])(control);
        expect(result).toEqual({
            restrictedWord: 'virus',
        });
    });

    it('should accept valid text', () => {
        const control = new FormControl('database failure');
        const result = restrictedWordsValidator(['virus', 'hack'])(control);
        expect(result).toBeNull();
    });
});
