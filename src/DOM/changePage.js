import { removeChildren } from "./features";
import { loadTodaysTask, loadTask, loadWeeksTask } from "./task";

const inbox = document.querySelector('.inbox');
const today = document.querySelector('.today');
const upcoming = document.querySelector('.upcoming');
const mainTopText = document.querySelector('.main-top > .title');
const items = document.querySelector('.tasks > .items')


export function changePage(){
    inbox.addEventListener('click', e => {
        mainTopText.textContent = 'Inbox';
        removeChildren(items);
        loadTask();
    });

    today.addEventListener('click', e => {
        mainTopText.textContent = 'Today';
        removeChildren(items);
        loadTodaysTask();
    });

    upcoming.addEventListener('click', e => {
        mainTopText.textContent = 'Upcoming';
        removeChildren(items);
        loadWeeksTask();
    });
};

