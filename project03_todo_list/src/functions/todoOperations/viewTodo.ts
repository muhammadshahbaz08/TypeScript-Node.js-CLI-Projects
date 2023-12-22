import Table from "cli-table3";
import { Todo } from "../../utils/todoType.js";
import dayjs from "dayjs";
export const viewTodo = (arr: Todo[]) => {
  let table = new Table({
    head: ["Task", "Due Date", "Status"],
    colWidths: [20, 20, 15],
  });
  // Add each todo to the table
  arr.forEach((todo: Todo) => {
    let formattedDate = dayjs(todo.dueDate).format("YYYY-MM-DD");
    table.push([todo.task, formattedDate, todo.status]);
  });

  console.log(table.toString());
};
