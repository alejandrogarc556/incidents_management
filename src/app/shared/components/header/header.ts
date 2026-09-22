import { Component, computed, signal } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = 'Incident Management System';

  currentUser = signal('John Alejandro Gualteros');

  currentUserInitials = computed(() => {
    const names = this.currentUser().trim().split(' ').filter(Boolean);

    if (names.length === 1) {
      return names[0].substring(0, 2).toUpperCase();
    }

    return names
      .slice(0, 2)
      .map((name) => name[0])
      .join('')
      .toUpperCase();
  });
}
