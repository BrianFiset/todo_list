import { removeChildren } from "./features";
import { loadTodaysTask, loadTask, loadWeeksTask, toggleTaskMenu, loadProjectTask } from "./task";

const inbox = document.querySelector('.inbox');
const today = document.querySelector('.today');
const upcoming = document.querySelector('.upcoming');
const mainTopText = document.querySelector('.main-top > .title');
const items = document.querySelector('.tasks > .items');


export function changeProjectPage() {
    const projectNames = document.querySelectorAll('.project-name');
    projectNames.forEach(item => item.addEventListener('click', e => {
        change(e.target.textContent);
        loadProjectTask(e);
    }))
}

function change(title) {
    const addTaskMenuBtn = document.querySelector('.tasks > .add-tasks');
    mainTopText.textContent = title;
    removeChildren(items);
    addTaskMenuBtn.classList.remove('display-none');
    document.querySelector('.tasks > form').classList.add('display-none');
}

export function changePage(){
    inbox.addEventListener('click', () => {
        change('Inbox');
        loadTask();
    });

    today.addEventListener('click', () => {
        change('Today');
        loadTodaysTask();
    });

    upcoming.addEventListener('click', () => {
        change('Upcoming');
        loadWeeksTask();
    });
};

