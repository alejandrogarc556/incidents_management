import { Injectable, computed, signal } from '@angular/core';

import { Incident } from '../models/incident.model';
import { MOCK_INCIDENTS } from '../mocks/mock-incidents';

@Injectable({
    providedIn: 'root',
})
export class IncidentService {
    private readonly incidentsSignal = signal<Incident[]>([...MOCK_INCIDENTS]);

    readonly searchTerm = signal('');

    readonly selectedPriority = signal<string | null>(null);

    readonly incidents = this.incidentsSignal.asReadonly();

    readonly totalIncidents = computed(() => this.incidentsSignal().length);

    readonly criticalIncidents = computed(
        () => this.incidentsSignal().filter((incident) => incident.priority === 'CRITICAL').length,
    );

    readonly openIncidents = computed(
        () => this.incidentsSignal().filter((incident) => incident.status === 'OPEN').length,
    );

    readonly filteredIncidents = computed(() => {
        const incidents = this.incidentsSignal();

        const search = this.searchTerm().toLowerCase();

        const priority = this.selectedPriority();

        return incidents.filter((incident) => {
            const matchesTitle = incident.title.toLowerCase().includes(search);
            const matchesDescription = incident.description.toLowerCase().includes(search);
            const matchesPriority = priority === null || incident.priority === priority;

            return (matchesTitle || matchesDescription) && matchesPriority;
        });
    });

    getById(id: number): Incident | undefined {
        return this.incidentsSignal().find((incident) => incident.id === id);
    }

    create(incident: Incident): void {
        this.incidentsSignal.update((incidents) => [...incidents, incident]);
    }

    delete(id: number): void {
        this.incidentsSignal.update((incidents) => incidents.filter((incident) => incident.id !== id));
    }
}
