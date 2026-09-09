import { Component } from '@angular/core';
import { IncidentListComponent } from "../../../incidents/pages/incident-list/incident-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [IncidentListComponent]
})
export class HomeComponent {

  title: string = 'Incident Management System';

  currentUser: string = 'John Gualteros';

  showDetails: boolean = true;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}