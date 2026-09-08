import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

  title: string = 'Incident Management System';

  currentUser: string = 'John Gualteros';

  showDetails: boolean = true;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}