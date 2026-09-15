import {
    Directive,
    ElementRef,
    Renderer2,
    input,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[appHighlightCritical]'
})
export class HighlightCriticalDirective implements OnInit {

    appHighlightCritical = input<string>();

    constructor(
        private readonly element: ElementRef,
        private readonly renderer: Renderer2
    ) { }

    ngOnInit(): void {

        if (
            this.appHighlightCritical() === 'CRITICAL'
        ) {

            this.renderer.setStyle(
                this.element.nativeElement,
                'border',
                '2px solid #dc2626'
            );

            this.renderer.setStyle(
                this.element.nativeElement,
                'box-shadow',
                '0 0 0 4px rgba(220,38,38,0.08)'
            );

        }

    }

}