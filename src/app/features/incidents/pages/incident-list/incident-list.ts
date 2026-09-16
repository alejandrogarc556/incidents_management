import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { IncidentCardComponent } from '../../components/incident-card/incident-card';
import { IncidentService } from '../../services/incident.service';

@Component({
    selector: 'app-incident-list',
    imports: [IncidentCardComponent],
    templateUrl: './incident-list.html',
    styleUrl: './incident-list.scss',
})
export class IncidentListComponent implements OnInit {
    incidents: Incident[] = [];

    selectedIncidentId: number | null = null;

    constructor(
        private readonly incidentService: IncidentService
    ) { }

    ngOnInit(): void {
        this.incidents = this.incidentService.getAll();
    }

    onIncidentSelected(id: number): void {
        this.selectedIncidentId = id;
    }

    onIncidentRemoved(id: number): void {
        this.incidentService.delete(id);

        this.incidents = this.incidentService.getAll();

        if (this.selectedIncidentId === id) {
            this.selectedIncidentId = null;
        }
    }
}
