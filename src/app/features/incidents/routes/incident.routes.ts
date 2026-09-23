import { Routes } from '@angular/router';
import { IncidentListComponent } from '../pages/incident-list/incident-list';
import { IncidentFormComponent } from '../components/incident-form/incident-form';
import { IncidentDetailComponent } from '../pages/incident-detail/incident-detail';


export const INCIDENT_ROUTES: Routes = [
    {
        path: '',
        component: IncidentListComponent,
    },

    {
        path: 'new',
        component: IncidentFormComponent,
    },

    {
        path: ':id',
        component: IncidentDetailComponent,
    },

    {
        path: ':id/edit',
        component: IncidentFormComponent,
    },
];
