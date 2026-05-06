export interface ITask {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
  userId: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
