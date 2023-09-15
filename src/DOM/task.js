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
    priority.value = 'low';
    priority.classList = 'green'
    description.value = '';
};

function addTaskListItem(title,description,date,priority){
    const item = document.createElement('div');
    item.classList.add('item');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = title;
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = description;
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    dateDiv.textContent = date;
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priority');
    priorityDiv.textContent = priority;
    const left = document.createElement('div');
    left.classList.add('left');
    const right = document.createElement('div');
    right.classList.add('right');

    left.appendChild(titleDiv);
    left.appendChild(descriptionDiv);
    right.appendChild(dateDiv);
    right.appendChild(priorityDiv);
    item.appendChild(left);
    item.appendChild(right);
    tasks.appendChild(item);
}



function addTask(e) {   
    if(title.value !== '') {
        e.preventDefault();
        todoItems.push(new TodoItem(title.value,dueDate.value,priority.value,description.value));
        addTaskListItem(title.value, description.value, dueDate.value , priority.value)
        clearForm();
        toggleTaskMenu();
    };
};

function toggleTaskMenu(e){
    addTaskMenuBtn.classList.toggle('display-none');
    document.querySelector('.tasks > form').classList.toggle('display-none');
};

function adjustHeight() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

export function removeTask(){
    const taskNumber = document.querySelector('.task-number');
    todoItems.splice(taskNumber.value,1);
    console.log(todoItems);
}

export function start(){
    addTaskMenuBtn.addEventListener('click', toggleTaskMenu,100);
    addTaskBtn.addEventListener('click', addTask);
    closeTaskMenu.addEventListener('click', toggleTaskMenu);
    description.addEventListener('input', adjustHeight,false)
};