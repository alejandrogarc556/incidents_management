import { Component, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusStyleDirective } from './focus-style.directive';

@Component({
    template: `
    <button appFocusStyle>
        Test Button
    </button>
    `,
    imports: [FocusStyleDirective]
})
class TestHostComponent { }

describe(
    'FocusStyleDirective',
    () => {

        let fixture:
            ComponentFixture<TestHostComponent>;

        beforeEach(async () => {
            await TestBed
                .configureTestingModule({
                    imports: [
                        TestHostComponent
                    ],
                    providers: [
                        provideZonelessChangeDetection()
                    ]
                })
                .compileComponents();
            fixture =
                TestBed.createComponent(
                    TestHostComponent
                );
            fixture.detectChanges();
        });

        it(
            'should apply focus outline',
            () => {
                const button: HTMLButtonElement =
                    fixture.nativeElement.querySelector(
                        'button'
                    );
                button.dispatchEvent(
                    new Event('focus')
                );
                fixture.detectChanges();
                expect(
                    button.style.outline
                ).not.toBe('');
            }
        );

        it(
            'should remove outline on blur',
            () => {
                const button: HTMLButtonElement =
                    fixture.nativeElement.querySelector(
                        'button'
                    );
                button.dispatchEvent(
                    new Event('focus')
                );
                button.dispatchEvent(
                    new Event('blur')
                );
                fixture.detectChanges();
                expect(
                    button.style.outline
                ).toBe(
                    'none'
                );
            }
        );

        it(
            'should apply transition style',
            () => {
                const button: HTMLButtonElement =
                    fixture.nativeElement.querySelector(
                        'button'
                    );
                expect(
                    button.style.transition
                ).toContain(
                    '0.2s'
                );
            }
        );
    }
);