import { Component, inject, signal } from '@angular/core';
import { IncidentApiService } from '../../services/incident-api.service';
import { IncidentApiResponse } from '../../models/incident-api.model';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.scss',
})
export class DashboardComponent {
    private readonly api = inject(IncidentApiService);
    readonly loading = signal(true);
    readonly error = signal<string | null>(null);
    readonly success = signal<string | null>(null);
    readonly incidents = signal<IncidentApiResponse[]>([]);

    constructor() {
        this.loadIncidents();
    }

    private loadIncidents(): void {
        this.loading.set(true);
        this.error.set(null);

        this.api.getAll().subscribe({
            next: (data) => {
                this.incidents.set(data.slice(0, 10));
                this.loading.set(false);
            },

            error: () => {
                this.error.set('Failed to load incidents');
                this.loading.set(false);
            },
        });
    }

    createDemo(): void {
        this.success.set(null);
        this.error.set(null);

        this.api
            .create({
                title: 'New Incident',
                body: 'Created from Angular HttpClient',
                userId: 1,
            })
            .subscribe({
                next: (response) => {
                    console.log('POST Success', response);
                    this.success.set('POST request executed successfully');
                },

                error: () => {
                    this.error.set('POST request failed');
                },
            });
    }

    updateDemo(): void {
        this.success.set(null);
        this.error.set(null);

        this.api
            .update(1, {
                title: 'Updated Incident',
                body: 'Updated from Angular HttpClient',
            })
            .subscribe({
                next: (response) => {
                    console.log('PUT Success', response);
                    this.success.set('PUT request executed successfully');
                },

                error: () => {
                    this.error.set('PUT request failed');
                },
            });
    }

    deleteDemo(): void {
        this.success.set(null);

        this.error.set(null);

        this.api.delete(1).subscribe({
            next: (response) => {
                console.log('DELETE Success', response);
                this.success.set('DELETE request executed successfully');
            },

            error: () => {
                this.error.set('DELETE request failed');
            },
        });
    }
}
