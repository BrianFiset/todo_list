import { TodoItem , todoItems} from "../logic/todoItem";

const title = document.querySelector('#title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const description = document.querySelector('#description');
const addTaskBtn = document.querySelector('.add-task-btn');
const deleteTaskBtn = document.querySelector('.delete-task-btn');
const addTaskMenuBtn = document.querySelector('.tasks > .add-tasks');
const tasks = document.querySelector('.tasks');
const closeTaskMenu = document.querySelector('.close-task-menu');

function clearForm() {
    title.value = '';
    dueDate.value = '';
    priority.value = '';
    description.value = '';
};

function missingValues(items) {
    let missing = 0;
    for (let item of items){
        if(item === '' || item === null) missing += 1;
    };
    return missing
};

function addTaskListItem(title,description){
    const item = document.createElement('div');
    item.classList.add('item');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = title;
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = description;
    item.appendChild(titleDiv);
    item.appendChild(descriptionDiv)
    tasks.appendChild(item)
}



function addTask(e) {   
    let missing = missingValues([title.value,dueDate.value,priority.value]);
    if(missing === 0) {
        e.preventDefault();
        todoItems.push(new TodoItem(title.value,dueDate.value,priority.value,description.value));
        addTaskListItem(title.value, description.value)
        clearForm();
        toggleTaskMenu();
    };
};

function toggleTaskMenu(e){
    addTaskMenuBtn.classList.toggle('display-none');
    document.querySelector('.tasks > form').classList.toggle('display-none');
};

export function removeTask(){
    const taskNumber = document.querySelector('.task-number');
    todoItems.splice(taskNumber.value,1);
    console.log(todoItems);
}

export function start(){
    addTaskMenuBtn.addEventListener('click', toggleTaskMenu,100);
    addTaskBtn.addEventListener('click', addTask);
    closeTaskMenu.addEventListener('click', toggleTaskMenu);
};