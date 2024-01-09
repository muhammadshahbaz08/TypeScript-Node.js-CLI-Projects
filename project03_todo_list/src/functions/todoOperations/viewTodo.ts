import Table from "cli-table3";
import { Todo } from "../../utils/todoType.js";
import dayjs from "dayjs";
import chalk from "chalk";
export const viewTodo = (arr: Todo[]) => {
  let table = new Table({
    head: ["Task ID", "Task", "Due Date", "Status"],
    colWidths: [20, 20, 20, 15],
  });
  // Add each todo to the table
  arr.forEach((todo: Todo, index) => {
    let formattedDate = dayjs(todo.dueDate).format("YYYY-MM-DD");
    table.push([index + 1, todo.task, formattedDate, todo.status]);
  });
  console.log(table.toString());
  console.log(
    chalk.hex("#577d9c")(`
    ----------------------------------------------------------
    `)
  );
};
