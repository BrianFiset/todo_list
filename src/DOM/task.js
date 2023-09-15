import { TodoItem , todoItems} from "../logic/todoItem";

const title = document.querySelector('#title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const description = document.querySelector('#description');
const addTaskBtn = document.querySelector('.add-task-btn');
const deleteTaskBtn = document.querySelector('.delete-task-btn');
const addTaskMenuBtn = document.querySelector('.tasks > .add-tasks');
const tasks = document.querySelector('.tasks');
const tasksItems = document.querySelector('.tasks > .items');
const closeTaskMenu = document.querySelector('.close-task-menu');
let today = new Date;
let nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+6);
today = today.toISOString().split('T')[0]
nextWeek = nextWeek.toISOString().split('T')[0]

todoItems.push(new TodoItem('Task 1','2023-09-15','Low','123'));
todoItems.push(new TodoItem('Task 2','2023-09-21','Medium','123'));
todoItems.push(new TodoItem('Task 3','2023-09-22','High','123'));

function clearForm() {
    title.value = '';
    dueDate.value = '';
    priority.value = 'Low';
    priority.classList = 'green'
    description.value = '';
};

function priorityColor(prio,div) {
    if(prio === 'Low'){
        div.classList.add('green');
    }else if(prio === 'Medium'){
        div.classList.add('yellow');
    } else div.classList.add('red');
}

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
    priorityColor(priority,priorityDiv);
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
    tasksItems.appendChild(item);
}



function addTask(e) {   
    if(title.value !== '') {
        e.preventDefault();
        todoItems.push(new TodoItem(title.value,dueDate.value,priority.value,description.value));
        addTaskListItem(title.value, description.value, dueDate.value , priority.value);
        clearForm();
        toggleTaskMenu();
    };
};

export function loadTask(){
    for(let item of todoItems){
        addTaskListItem(item.title,item.description,item.dueDate,item.priority);
    };
};

export function loadTodaysTask(){
    for(let item of todoItems){
        if(item.dueDate === today){
            addTaskListItem(item.title,item.description,item.dueDate,item.priority);
        };
    };
};

export function loadWeeksTask(){
    for(let item of todoItems){
        if(item.dueDate >= today &&
        item.dueDate <= nextWeek){
            addTaskListItem(item.title,item.description,item.dueDate,item.priority);
        };
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
    description.addEventListener('input', adjustHeight,false);
    loadTask();
};