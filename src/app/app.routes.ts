import { Routes } from '@angular/router';
import { DashboardComponent } from './features/incidents/pages/dashboard/dashboard';
import { NotFoundComponent } from './shared/pages/not-found/not-found';
import { MainLayoutComponent } from './layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
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
                loadChildren: () =>
                    import('./features/incidents/routes/incident.routes').then((m) => m.INCIDENT_ROUTES),
            },
        ],
    },

    {
        path: '**',

        component: NotFoundComponent,
    },
];
