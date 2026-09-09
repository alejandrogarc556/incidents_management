import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { IncidentListComponent } from './incident-list';

describe('IncidentListComponent', () => {

    let component: IncidentListComponent;
    let fixture: ComponentFixture<IncidentListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IncidentListComponent],
            providers: [
                provideZonelessChangeDetection()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(IncidentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load incidents', () => {
        expect(component.incidents.length).toBeGreaterThan(0);
    });

    it('should contain ten mock incidents', () => {
        expect(component.incidents.length).toBe(10);
    });

    it('should contain at least one critical incident', () => {
        const critical = component.incidents.some(
            incident => incident.priority === 'CRITICAL'
        );

        expect(critical).toBeTrue();
    });

    it('should contain at least one open incident', () => {
        const open = component.incidents.some(
            incident => incident.status === 'OPEN'
        );

        expect(open).toBeTrue();
    });

});