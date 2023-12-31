import { TodoItem , todoItems} from "../logic/todoItem";
import { project } from "../logic/todoItem";
import { removeChildren } from "./features";

const title = document.querySelector('#title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const taskProject = document.querySelector('#task-project');
const description = document.querySelector('#description');
const editTitle = document.querySelector('#edit-title');
const editDueDate = document.querySelector('#edit-due-date');
const editPriority = document.querySelector('#edit-priority');
const editTaskProject = document.querySelector('#edit-task-project');
const editDescription = document.querySelector('#edit-description');
const editAddTaskBtn = document.querySelector('.edit-add-task-btn');
const addTaskBtn = document.querySelector('.add-task-btn');
const deleteTaskBtn = document.querySelectorAll('.delete-icon');
const addTaskMenuBtn = document.querySelector('.tasks > .add-tasks');
const editTaskMenuBtn = document.querySelector('.edit-close-task-menu');
const editTask = document.querySelector('.form-edit');
const tasks = document.querySelector('.tasks');
const tasksItems = document.querySelector('.tasks > .items');
const closeTaskMenu = document.querySelector('.close-task-menu');
const detailsPopUp = document.querySelector('.details-pop-up');
const detailsPopUpContent = document.querySelector('.details-container');
const closeDetailsPopUp = document.querySelector('.close-icon');
const inboxAmount = document.querySelector('.inbox > .amount');
const todayAmount = document.querySelector('.today > .amount');
let today = new Date;
let nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+6);
today = today.toISOString().split('T')[0]
nextWeek = nextWeek.toISOString().split('T')[0]

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
    number += 1;
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

function editTasks(e){
    e.preventDefault();
    const index = todoItems.findIndex(item => item.title === e.target.dataset.title);
    if(todoItems[index].title !==  editTitle.value) {
        if(todoItems.findIndex(item => item.title === editTitle.value) !== -1)return alert(`${editTitle.value} already exists`);
    };
    todoItems[index].title =  editTitle.value;
    todoItems[index].description =  editDescription.value;
    todoItems[index].priority = editPriority.value;
    todoItems[index].dueDate = editDueDate.value;
    todoItems[index].project = editTaskProject.value;
    removeChildren(tasksItems);
    loadTask();
    editTask.classList.add('display-none');
};

function addTaskListItem(title,date,priority){
    const index = todoItems.findIndex(item => item.title === title);
    const checkMark = createDivElementWithClass('checkbox');
    checkMark.addEventListener('click',() => { checkMark.classList.toggle('checkbox-icon')})
    const item = createDivElementWithClass('item');
    const titleDiv = createDivElementWithClass('title');
    titleDiv.textContent = title;
    const dateDiv = createDivElementWithClass('date');
    const dateText = new Date(date);
    const month = dateText.toLocaleString('default',{month: 'short'});
    const day = getOrdinalNum(dateText.getDate());
    dateDiv.textContent =  month + ' ' + day;
    const detailsDiv = createDivElementWithClass('details');
    detailsDiv.textContent = 'Details';
    detailsDiv.addEventListener('click', () => {
        detailsPopUp.classList.remove('display-none');
        const titleText = document.querySelector('.details-container > .title');
        const priorityText = document.querySelector('.priority-span');
        const dateText = document.querySelector('.date-span');
        const detailsText = document.querySelector('.description-span');
        titleText.textContent = todoItems[index].title;
        detailsText.textContent = todoItems[index].description;
        priorityText.textContent = todoItems[index].priority;
        dateText.textContent = todoItems[index].dueDate;
    });

    const editDiv = createDivElementWithClass('edit-icon');
    editDiv.dataset.title = title;
    editDiv.addEventListener('click', () => {
        editTask.classList.remove('display-none');
        editTitle.value = todoItems[index].title;
        editDescription.value = todoItems[index].description;
        editPriority.value = todoItems[index].priority;
        editDueDate.value = todoItems[index].dueDate;
        editAddTaskBtn.dataset.title = title;
    });

    const deleteDiv = createDivElementWithClass('delete-icon');
    deleteDiv.dataset.title = title;
    deleteDiv.addEventListener('click',() => {
        todoItems.splice(index,1);
        tasksItems.removeChild(item);
        localStorage.setItem('tasks',JSON.stringify(todoItems));
        inboxAmount.textContent = todoItems.length;
    });
    inboxAmount.textContent = todoItems.length
    for(let item of todoItems){
        let count = 0;
        if(item.dueDate === today){
            count += 1;
            todayAmount.textContent = count;
        };
    };
    const right = createDivElementWithClass('task-right');
    const left = createDivElementWithClass('task-left');
    left.appendChild(checkMark);
    left.appendChild(titleDiv);
    right.appendChild(detailsDiv);
    right.appendChild(dateDiv);
    right.appendChild(editDiv);
    right.appendChild(deleteDiv);
    priorityColor(priority,item);
    item.appendChild(left);
    item.appendChild(right);
    tasksItems.appendChild(item);
    localStorage.setItem('tasks',JSON.stringify(todoItems));
};



function addTask(e) {   
    if(title.value !== '' && dueDate.value !== '') {
        e.preventDefault();
        if(todoItems.filter(item => item.title === title.value) == 0){
            todoItems.push(new TodoItem(title.value,dueDate.value,priority.value,description.value,taskProject.value,taskProject.value));
            addTaskListItem(title.value, dueDate.value , priority.value);
            clearForm();
            toggleTaskMenu();
        } else {
            alert(`${title.value} already exists`);
        };
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
    addTaskMenuBtn.classList.toggle('display-none');
    document.querySelector('.tasks > form').classList.toggle('display-none');
};

function adjustHeight() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

export function start(){
    addTaskMenuBtn.addEventListener('click', toggleTaskMenu,100);
    addTaskBtn.addEventListener('click', addTask);
    closeTaskMenu.addEventListener('click', toggleTaskMenu);
    editTaskMenuBtn.addEventListener('click', () => editTask.classList.add('display-none'))
    description.addEventListener('input', adjustHeight,false);
    closeDetailsPopUp.addEventListener('click', () => detailsPopUp.classList.add('display-none'))
    editAddTaskBtn.addEventListener('click', editTasks);
    loadTask();
};