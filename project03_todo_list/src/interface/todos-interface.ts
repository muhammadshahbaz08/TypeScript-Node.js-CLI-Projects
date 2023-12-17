export interface Todo {
  id: number;
  task: string;
  dueDate: Date;
  status: "incomplete" | "completed" | "inprogress";
}
