import 'normalize.css';
import './style.css';
import { start } from './DOM/task';
import { features } from './DOM/features';
import { changePage } from './DOM/changePage';
import { runProject } from './DOM/projectPage';
import { todoItems, TodoItem, project } from './logic/todoItem';

const tasks = JSON.parse(localStorage.getItem('tasks')|| "[]");
const projects = JSON.parse(localStorage.getItem('projects')|| "[]");
for(let task of tasks) {
    todoItems.push(new TodoItem(task.title,task.dueDate,task.priority,task.description,task.project))
}
for(let item of projects) {
    project.push(item);
}

runProject();
start();
features();
changePage();