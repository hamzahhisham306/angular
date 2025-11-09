import { Routes } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';
import { canLeavEditPage, NewTaskComponent } from '../tasks/new-task/new-task.component';
import { NotFoundComponent } from '../tasks/NotFound/not-found.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate:[canLeavEditPage]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
