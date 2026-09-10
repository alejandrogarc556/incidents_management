import { Component, input, output } from '@angular/core';
import { Incident } from '../../models/incident.model';

@Component({
  selector: 'app-incident-card',
  templateUrl: './incident-card.html',
  styleUrl: './incident-card.scss',
  imports: []
})
export class IncidentCardComponent {

  incident = input.required<Incident>();

  selected = output<number>();

  removed = output<number>();

  selectIncident(): void {
    this.selected.emit(this.incident().id);
  }

  removeIncident(): void {
    this.removed.emit(this.incident().id);
  }
}