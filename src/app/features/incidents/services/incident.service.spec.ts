import { TestBed } from '@angular/core/testing';

import { IncidentService } from './incident.service';

import { Incident } from '../models/incident.model';
import { MOCK_USERS } from '../mocks/mock-users';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IncidentService', () => {
    let service: IncidentService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        service = TestBed.inject(IncidentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return incidents', () => {
        expect(service.incidents().length).toBeGreaterThan(0);
    });

    it('should calculate total incidents', () => {
        expect(service.totalIncidents()).toBe(service.incidents().length);
    });

    it('should calculate open incidents', () => {
        const openIncidents = service.incidents().filter((incident) => incident.status === 'OPEN');
        expect(service.openIncidents()).toBe(openIncidents.length);
    });

    it('should calculate critical incidents', () => {
        const criticalIncidents = service
            .incidents()
            .filter((incident) => incident.priority === 'CRITICAL');
        expect(service.criticalIncidents()).toBe(criticalIncidents.length);
    });

    it('should find incident by id', () => {
        const incident = service.getById(1);
        expect(incident).toBeDefined();
    });

    it('should return undefined for unknown incident', () => {
        expect(service.getById(999)).toBeUndefined();
    });

    it('should create incident', () => {
        const before = service.totalIncidents();

        const incident: Incident = {
            id: 999,
            title: 'Signal Test Incident',
            description: 'Created during test',
            status: 'OPEN',
            priority: 'LOW',
            category: 'TEST',
            createdAt: new Date(),
            createdBy: MOCK_USERS[0],
        };
        service.create(incident);
        expect(service.totalIncidents()).toBe(before + 1);
    });

    it('should delete incident', () => {
        const before = service.totalIncidents();
        service.delete(1);
        expect(service.totalIncidents()).toBe(before - 1);
    });

    it('should filter incidents by search term', () => {
        service.searchTerm.set('vpn');
        const filtered = service.filteredIncidents();
        expect(filtered.length).toBeGreaterThan(0);
    });

    it('should reactively update filtered incidents', () => {
        service.searchTerm.set('vpn');
        const firstResult = service.filteredIncidents()[0]?.title;
        service.searchTerm.set('database');
        const secondResult = service.filteredIncidents()[0]?.title;
        expect(firstResult).not.toBe(secondResult);
    });

    it('should expose readonly incidents signal', () => {
        expect(service.incidents()).toBeDefined();
    });
});
