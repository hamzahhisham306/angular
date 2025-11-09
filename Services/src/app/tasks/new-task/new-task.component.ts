import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');


  // Service Injection: In this approach, the TasksService is injected via Angular’s DI system.
  // This allows Angular to manage the lifecycle of the service, ensuring that a single instance is shared across components
  // (if it's provided in the root or another shared module).

  constructor(private tasksService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}


// Service Instantiation: The TasksService is manually instantiated using new TasksService().
//  This approach creates a new instance of TasksService every time the component is created.

// constructor() {
//   this.tasksService = new TasksService();
// }
