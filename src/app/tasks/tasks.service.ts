import { ITask, NewTaskData } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: ITask[] = [
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

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks (userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(userId: string, taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      summary: taskData.summary,
      title: taskData.title,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks( ) {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
