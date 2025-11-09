import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UsersComponent, RouterOutlet],
})
export class AppComponent {


}



// Routing in Angular is the process of navigating between different views or components within a single-page application (SPA).
// Instead of loading new pages from a server, Angular uses routing to dynamically display components based on the current URL,
// allowing for seamless transitions and a more efficient user experience.

