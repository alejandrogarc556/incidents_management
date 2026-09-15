import {
    Directive,
    HostBinding,
    HostListener
} from '@angular/core';

@Directive({
    selector: '[appFocusStyle]'
})
export class FocusStyleDirective {

    @HostBinding('style.outline')
    outline = 'none';

    @HostBinding('style.transition')
    transition = 'all .2s ease';

    @HostListener('focus')
    onFocus(): void {
        this.outline =
            '3px solid #bfdbfe';
    }

    @HostListener('blur')
    onBlur(): void {
        this.outline =
            'none';
    }
}