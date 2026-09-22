import { Routes } from '@angular/router';

import { IncidentListComponent } from './features/incidents/pages/incident-list/incident-list';
import { IncidentDetailComponent } from './features/incidents/pages/incident-detail/incident-detail';
import { IncidentFormComponent } from './features/incidents/components/incident-form/incident-form';
import { DashboardComponent } from './features/incidents/pages/dashboard/dashboard';
import { NotFoundComponent } from './shared/pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },

    {
        path: 'dashboard',
        component: DashboardComponent,
    },

    {
        path: 'incidents',
        component: IncidentListComponent,
    },

    {
        path: 'incidents/new',
        component: IncidentFormComponent,
    },

    {
        path: 'incidents/:id',
        component: IncidentDetailComponent,
    },

    {
        path: '**',
        component: NotFoundComponent,
    },
];
