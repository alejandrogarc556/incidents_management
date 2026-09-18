import { Component } from '@angular/core';

import { IncidentCardComponent } from '../../components/incident-card/incident-card';

import { IncidentService } from '../../services/incident.service';
import { IncidentFormComponent } from '../../components/incident-form/incident-form';

@Component({
    selector: 'app-incident-list',
    imports: [IncidentCardComponent, IncidentFormComponent],
    templateUrl: './incident-list.html',
    styleUrl: './incident-list.scss',
})
export class IncidentListComponent {
    selectedIncidentId: number | null = null;

    constructor(public readonly incidentService: IncidentService) { }

    onIncidentSelected(id: number): void {
        this.selectedIncidentId = id;
    }

    onIncidentRemoved(id: number): void {
        this.incidentService.delete(id);

        if (this.selectedIncidentId === id) {
            this.selectedIncidentId = null;
        }
    }
}
