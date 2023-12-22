export interface Todo {
  task: string;
  dueDate: string;
  status: "incomplete" | "completed" | "inprogress";
}
