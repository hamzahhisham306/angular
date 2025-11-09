import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  userTasks: Task[] = [];
  private taskService = inject(TasksService);
  order = signal<'asc' | 'desc'>('desc');

  activedRouter = inject(ActivatedRoute);
  private destrotyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscribetion = this.activedRouter.paramMap.subscribe({
      next: (params) => {
        this.userTasks = this.taskService
          .allTasks()
          .filter((task) => task.userId === params.get('userId'))
          .sort((a, b) => {
            if (this.order() === 'desc') {
              return a.id > b.id ? -1 : 1;
            } else {
              return a.id > b.id ? 1 : -1;
            }
          });
        console.log('userTasks>>>>>>>>>>', params.get('userId'));
      },
    });

    this.destrotyRef.onDestroy(() => subscribetion.unsubscribe());
  }
}
