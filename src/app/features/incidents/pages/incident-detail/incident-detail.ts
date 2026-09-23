import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-incident-detail',
    templateUrl: './incident-detail.html',
    styleUrl: './incident-detail.scss'
})
export class IncidentDetailComponent {
    readonly route = inject(ActivatedRoute);

    readonly id = this.route.snapshot.paramMap.get('id');
}
