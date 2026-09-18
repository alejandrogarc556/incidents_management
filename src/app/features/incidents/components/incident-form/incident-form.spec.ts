import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { IncidentFormComponent } from './incident-form';

describe('IncidentFormComponent', () => {
    let component: IncidentFormComponent;

    let fixture: ComponentFixture<IncidentFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IncidentFormComponent],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();
        fixture = TestBed.createComponent(IncidentFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should start invalid', () => {
        expect(component.form.invalid).toBeTrue();
    });

    it('should be valid when all fields are populated', () => {
        component.form.setValue({
            title: 'VPN Failure',
            description: 'Users cannot connect to VPN',
            category: 'NETWORK',
            priority: 'HIGH',
        });
        expect(component.form.valid).toBeTrue();
    });
});
