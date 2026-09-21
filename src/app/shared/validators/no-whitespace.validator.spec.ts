import { FormControl } from '@angular/forms';

import { noWhitespaceValidator } from './no-whitespace.validator';

describe('noWhitespaceValidator', () => {
    it('should reject spaces', () => {
        const control = new FormControl('      ');
        const result = noWhitespaceValidator()(control);
        expect(result).toEqual({
            whitespace: true,
        });
    });

    it('should accept text', () => {
        const control = new FormControl('network error');
        const result = noWhitespaceValidator()(control);
        expect(result).toBeNull();
    });
});
