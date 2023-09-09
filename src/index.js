import {TodoItem, todoItems} from "./logic/todoItem";
import { start , removeTask} from "./DOM/task";

todoItems.push(new TodoItem('code','3hours','37','red'));

start();