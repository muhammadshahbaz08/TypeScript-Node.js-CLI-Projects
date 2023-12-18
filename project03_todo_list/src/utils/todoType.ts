export interface Todo {
  task: string;
  dueDate: Date;
  status: "incomplete" | "completed" | "inprogress";
}
