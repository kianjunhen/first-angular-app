import { Component, Input } from '@angular/core';
import {Task} from './task/task';
import {ITask} from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  tasks: ITask[] = [
    {
      id: 't1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features and how to apply them.',
      dueDate: '2025-12-31',
      userId: 'u1',
    },
    {
      id: 't2',
      title: 'Master React',
      summary: 'Learn all the basic and advanced features and how to apply them.',
      dueDate: '2025-12-31',
      userId: 'u2',
    },
    {
      id: 't3',
      title: 'Master NodeJS',
      summary: 'Learn all the basic and advanced features and how to apply them.',
      dueDate: '2025-12-31',
      userId: 'u3',
    },
    {
      id: 't4',
      title: 'Master NodeJS',
      summary: 'Learn all the basic and advanced features and how to apply them.',
      dueDate: '2025-12-31',
      userId: 'u3',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
