import { Component } from '@angular/core';
import { MOCK_INCIDENTS } from '../../mocks/mock-incidents';
import { Incident } from '../../models/incident.model';

@Component({
    selector: 'app-incident-list',
    templateUrl: './incident-list.html',
    styleUrl: './incident-list.scss'
})
export class IncidentListComponent {

    incidents: Incident[] = MOCK_INCIDENTS;

}