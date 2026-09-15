import {
    Component,
    provideZonelessChangeDetection
} from '@angular/core';

import {
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {
    HighlightCriticalDirective
} from './highlight-critical.directive';

@Component({
    template: `
    <div [appHighlightCritical]="priority">
        Test
    </div>
    `,
    imports: [
        HighlightCriticalDirective
    ]
})
class CriticalHostComponent {
    priority = 'CRITICAL';
}

@Component({
    template: `
    <div
        [appHighlightCritical]="priority">
        Test
        </div>
    `,
    imports: [
        HighlightCriticalDirective
    ]
})
class HighHostComponent {

    priority = 'HIGH';

}

describe(
    'HighlightCriticalDirective',
    () => {

        beforeEach(async () => {
            await TestBed
                .configureTestingModule({
                    imports: [
                        CriticalHostComponent,
                        HighHostComponent
                    ],
                    providers: [
                        provideZonelessChangeDetection()
                    ]
                })
                .compileComponents();
        });

        it(
            'should apply critical styles',
            () => {
                const fixture:
                    ComponentFixture<CriticalHostComponent> =
                    TestBed.createComponent(
                        CriticalHostComponent
                    );
                fixture.detectChanges();
                const element: HTMLElement =
                    fixture.nativeElement.querySelector(
                        'div'
                    );
                expect(
                    element.style.border
                ).toContain(
                    '2px solid'
                );
            }
        );

        it(
            'should apply critical box shadow',
            () => {
                const fixture:
                    ComponentFixture<CriticalHostComponent> =
                    TestBed.createComponent(
                        CriticalHostComponent
                    );
                fixture.detectChanges();
                const element: HTMLElement =
                    fixture.nativeElement.querySelector(
                        'div'
                    );
                expect(
                    element.style.boxShadow
                ).not.toBe('');
            }
        );

        it(
            'should not apply styles for non critical priority',
            () => {
                const fixture:
                    ComponentFixture<HighHostComponent> =
                    TestBed.createComponent(
                        HighHostComponent
                    );
                fixture.detectChanges();
                const element: HTMLElement =
                    fixture.nativeElement.querySelector(
                        'div'
                    );
                expect(
                    element.style.border
                ).toBe('');
                expect(
                    element.style.boxShadow
                ).toBe('');
            }
        );
    }
);