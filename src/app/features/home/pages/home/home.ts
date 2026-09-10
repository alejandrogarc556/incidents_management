import { Component } from '@angular/core';
import { IncidentListComponent } from "../../../incidents/pages/incident-list/incident-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [IncidentListComponent]
})
export class HomeComponent {

}