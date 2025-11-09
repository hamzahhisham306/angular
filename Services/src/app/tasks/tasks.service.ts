import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root', // we can use it any where
}) // To tell Angular to enable this class to be injectable for other classes
export class TasksService {
  tasks = signal<Task[]>([]);
  private loggingServer = inject(LoggingService);
  selectedFilter = signal<string>('all');

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
  // setFilterTask(filter: string) {
  //   this.selectedFilter.set(filter);
  //    // Update the selected filter
  //   this.tasks.update((oldTasks) => {
  //     // Return the filtered tasks array
  //     return oldTasks.filter((task) => task.status === filter);
  //   });
  //   console.log(this.tasks())
  // }
  changeStatusTask(taskData: {
    taskId: string | number;
    taskStatus: TaskStatus;
  }) {
    this.tasks().forEach((task) => {
      if (task.id === taskData.taskId) {
        task.status = taskData.taskStatus;
        this.loggingServer.log("CHANGE TASK STATUS TO "+taskData.taskStatus)
      }
    });
  }
}
