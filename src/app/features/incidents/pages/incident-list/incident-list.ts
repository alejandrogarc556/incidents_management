import { Component } from '@angular/core';
import { IncidentCardComponent } from '../../components/incident-card/incident-card';
import { MOCK_INCIDENTS } from '../../mocks/mock-incidents';
import { Incident } from '../../models/incident.model';

@Component({
    selector: 'app-incident-list',
    imports: [IncidentCardComponent],
    templateUrl: './incident-list.html',
    styleUrl: './incident-list.scss'
})
export class IncidentListComponent {

    incidents: Incident[] = [...MOCK_INCIDENTS];

    selectedIncidentId: number | null = null;

    onIncidentSelected(id: number): void {
        this.selectedIncidentId = id;

        console.log(
            `Selected incident: ${id}`
        );
    }

    onIncidentRemoved(id: number): void {
        this.incidents = this.incidents.filter(
            incident => incident.id !== id
        );

        if (this.selectedIncidentId === id) {
            this.selectedIncidentId = null;
        }
    }

}