import { TestBed } from '@angular/core/testing';

import { IncidentService } from './incident.service';
import { Incident } from '../models/incident.model';
import { MOCK_USERS } from '../mocks/mock-users';

describe('IncidentService', () => {
    let service: IncidentService;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(IncidentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return incidents', () => {
        expect(service.getAll().length).toBeGreaterThan(0);
    });

    it('should return a copy of incidents', () => {
        const incidents = service.getAll();
        incidents.pop();
        expect(service.getAll().length).not.toBe(incidents.length);
    });

    it('should find incident by id', () => {
        const incident = service.getById(1);
        expect(incident).toBeDefined();
        expect(incident?.id).toBe(1);
    });

    it('should return undefined when incident does not exist', () => {
        const incident = service.getById(999);
        expect(incident).toBeUndefined();
    });

    it('should create incident', () => {
        const before = service.getAll().length;
        const incident: Incident = {
            id: 999,
            title: 'Test Incident',
            description: 'Created from test',
            status: 'OPEN',
            priority: 'LOW',
            category: 'TEST',
            createdAt: new Date(),
            createdBy: MOCK_USERS[0],
        };
        service.create(incident);
        const after = service.getAll().length;
        expect(after).toBe(before + 1);
    });

    it('should delete incident', () => {
        const before = service.getAll().length;
        service.delete(1);
        const after = service.getAll().length;
        expect(after).toBe(before - 1);
    });

    it('should not fail when deleting unknown incident', () => {
        const before = service.getAll().length;
        service.delete(9999);
        const after = service.getAll().length;
        expect(after).toBe(before);
    });
});
