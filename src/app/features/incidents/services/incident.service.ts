import { Injectable } from '@angular/core';

import { Incident } from '../models/incident.model';
import { MOCK_INCIDENTS } from '../mocks/mock-incidents';

@Injectable({
    providedIn: 'root',
})
export class IncidentService {
    private incidents: Incident[] = [...MOCK_INCIDENTS];

    getAll(): Incident[] {
        return [...this.incidents];
    }

    getById(id: number): Incident | undefined {
        return this.incidents.find((incident) => incident.id === id);
    }

    create(incident: Incident): void {
        this.incidents.push(incident);
    }

    delete(id: number): void {
        this.incidents = this.incidents.filter((incident) => incident.id !== id);
    }
}
