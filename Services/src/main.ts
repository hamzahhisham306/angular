import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
bootstrapApplication(AppComponent).catch((err) => console.error(err));


// Another way to inject the Service through the Angualer Application
// bootstrapApplication(AppComponent, {
//   providers: [TasksService],
// }).catch((err) => console.error(err));
