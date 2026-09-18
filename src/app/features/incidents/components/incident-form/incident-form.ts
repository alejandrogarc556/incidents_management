import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncidentService } from '../../services/incident.service';
import { MOCK_USERS } from '../../mocks/mock-users';

@Component({
    selector: 'app-incident-form',
    imports: [ReactiveFormsModule],
    templateUrl: './incident-form.html',
    styleUrl: './incident-form.scss',
})
export class IncidentFormComponent {
    private readonly fb = inject(FormBuilder);

    private readonly incidentService = inject(IncidentService);

    readonly form = this.fb.nonNullable.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        category: ['', Validators.required],
        priority: ['', Validators.required],
    });

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const value = this.form.getRawValue();

        this.incidentService.create({
            id: Date.now(),
            title: value.title,
            description: value.description,
            category: value.category,
            priority: value.priority as any,
            status: 'OPEN',
            createdAt: new Date(),
            createdBy: MOCK_USERS[0],
        });

        this.form.reset();
    }
}
