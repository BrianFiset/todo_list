import { TodoItem , todoItems} from "../logic/todoItem";

// const title = document.querySelector('#title');
// const dueDate = document.querySelector('#due-date');
// const priority = document.querySelector('#priority');
// const description = document.querySelector('#description');
// const addTaskBtn = document.querySelector('.add-task-btn');
// const deleteTaskBtn = document.querySelector('.delete-task-btn');
const addTaskMenuBtn = document.querySelector('.tasks > .add-tasks');

// title.required = true;
// dueDate.required = true;
// priority.required = true;

export function removeChildren(elem) {
    while(elem.firstChild) {
        elem.removeChild(elem.firstChild);
    };
};

// function clearForm() {
//     title.value = '';
//     dueDate.value = '';
//     priority.value = '';
//     description.value = '';
// };

// function missingValues(items) {
//     let missing = 0;
//     for (let item of items){
//         if(item === '' || item === null) missing += 1;
//     };
//     return missing
// };

// function addTask(e) {   
//     let missing = missingValues([title.value,dueDate.value,priority.value]);
//     if(missing === 0) {
//         e.preventDefault();
//         todoItems.push(new TodoItem(title.value,dueDate.value,priority.value,description.value));
//         console.log(todoItems);
//         clearForm();
//     };
// };

function addTaskMenu(e){
    removeChildren(e.target);
};

// export function removeTask(){
//     const taskNumber = document.querySelector('.task-number');
//     todoItems.splice(taskNumber.value,1)
//     console.log(todoItems);
// }

export function start(){
    addTaskMenuBtn.addEventListener('click', addTaskMenu);
};