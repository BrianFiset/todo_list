import { TodoItem , todoItems} from "../logic/todoItem";
import { project } from "../logic/todoItem";
import { removeChildren } from "./features";
import { loadProjectOnMenu } from "./projectPage";

const title = document.querySelector('#title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const taskProject = document.querySelector('#task-project');
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
        div.classList.add('green-border');
    }else if(prio === 'Medium'){
        div.classList.add('yellow-border');
    } else div.classList.add('red-border');
}

const getOrdinalNum = (number) => {
    let selector;
  
    if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }
  
    return number + ['th', 'st', 'nd', 'rd'][selector];
  };

const createDivElementWithClass = (className) => {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
};

function addTaskListItem(title,date,priority){
    const checkMark = createDivElementWithClass('checkbox');
    const item = createDivElementWithClass('item');
    const titleDiv = createDivElementWithClass('title');
    titleDiv.textContent = title;
    const dateDiv = createDivElementWithClass('date');
    let dateText = new Date(date)
    let month = dateText.toLocaleString('default',{month: 'short'});
    let day = getOrdinalNum(dateText.getDay());
    dateDiv.textContent =  month + ' ' + day
    const detailsDiv = createDivElementWithClass('details');;
    detailsDiv.textContent = 'Details';

    const editDiv = createDivElementWithClass('edit-icon');;
    const deleteDiv = createDivElementWithClass('delete-icon');

    const right = createDivElementWithClass('task-right');;
    const left = createDivElementWithClass('task-left');

    left.appendChild(checkMark)
    left.appendChild(titleDiv);
    right.appendChild(detailsDiv);
    right.appendChild(dateDiv);
    right.appendChild(editDiv);
    right.appendChild(deleteDiv);
    priorityColor(priority,item);
    item.appendChild(left);
    item.appendChild(right);
    tasksItems.appendChild(item);
}



function addTask(e) {   
    if(title.value !== '') {
        e.preventDefault();
        todoItems.push(new TodoItem(title.value,dueDate.value,priority.value,description.value,taskProject.value));
        addTaskListItem(title.value, dueDate.value , priority.value);
        clearForm();
        toggleTaskMenu();
    };
};

export function loadProjectTask(e){
    for(let item of todoItems){
        if(e.target.textContent === item.project) {
        addTaskListItem(item.title,item.dueDate,item.priority);
        };
    };
};

export function loadTask(){
    for(let item of todoItems){
        addTaskListItem(item.title,item.dueDate,item.priority);
    };
};

export function loadTodaysTask(){
    for(let item of todoItems){
        if(item.dueDate === today){
            addTaskListItem(item.title,item.dueDate,item.priority);
        };
    };
};

export function loadWeeksTask(){
    for(let item of todoItems){
        if(item.dueDate >= today &&
        item.dueDate <= nextWeek){
            addTaskListItem(item.title,item.dueDate,item.priority);
        };
    };
};

export function toggleTaskMenu(e){
    loadProjectOnMenu()
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