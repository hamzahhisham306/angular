import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';

// Understading Services
// Services allow you ton share login and data across the appliction

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent],
})
export class AppComponent {}
