import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';

import { IncidentListComponent } from './incident-list';

describe('IncidentListComponent', () => {
    let component: IncidentListComponent;

    let fixture: ComponentFixture<IncidentListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IncidentListComponent],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();

        fixture = TestBed.createComponent(IncidentListComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load incidents from service', () => {
        expect(component.incidentService.incidents().length).toBeGreaterThan(0);
    });

    it('should contain incidents', () => {
        expect(component.incidentService.totalIncidents()).toBeGreaterThan(0);
    });

    it('should contain critical incidents', () => {
        expect(component.incidentService.criticalIncidents()).toBeGreaterThanOrEqual(1);
    });

    it('should contain open incidents', () => {
        expect(component.incidentService.openIncidents()).toBeGreaterThanOrEqual(1);
    });

    it('should select incident', () => {
        component.onIncidentSelected(1);
        expect(component.selectedIncidentId).toBe(1);
    });

    it('should clear selected incident after deletion', () => {
        component.selectedIncidentId = 1;
        component.onIncidentRemoved(1);
        expect(component.selectedIncidentId).toBeNull();
    });
});
