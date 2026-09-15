import { Component, input, output } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { PriorityLabelPipe } from '../../../../shared/pipes/priority-label.pipe.ts-pipe';
import { RelativeTimePipe } from '../../../../shared/pipes/relative-time.pipe.ts-pipe';
import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HighlightCriticalDirective } from '../../../../shared/directives/highlight-critical.directive';
import { FocusStyleDirective } from '../../../../shared/directives/focus-style.directive';

@Component({
  selector: 'app-incident-card',
  templateUrl: './incident-card.html',
  styleUrl: './incident-card.scss',
  imports: [
    PriorityLabelPipe,
    RelativeTimePipe,
    TitleCasePipe,
    DatePipe,
    UpperCasePipe,
    HighlightCriticalDirective,
    FocusStyleDirective
  ]
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