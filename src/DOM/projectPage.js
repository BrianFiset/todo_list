import { project } from "../logic/todoItem";
import { changeProjectPage } from "./changePage";
import { removeChildren } from "./features";

const addProjectMenuBtn = document.querySelector('.project > .add-task-icon');
const addProjectSection = document. querySelector('.add-project');
const closeProjectMenu = document.querySelector('.add-project .cancel');
const addProjectBtn = document.querySelector('.add-project .add');
const inputProject = document.querySelector('#project');
const projectItems = document.querySelector('.sidebar-bottom .items');

function addProjectMenu() {
    addProjectSection.classList.toggle('display-none');
};

function loadProjects() {
    removeChildren(projectItems)
    for(let item of project) {
        const title = document.createElement('div');
        title.classList.add('project-name');
        title.textContent = item;
        projectItems.appendChild(title)
    }
}

function addProject(e) {
    if(inputProject.value !== '') {
        e.preventDefault();
        project.push(inputProject.value);
        inputProject.value = ''
        addProjectMenu();
        loadProjects();
        loadProjectOnMenu();
        changeProjectPage();
    };
};

export function loadProjectOnMenu() {
    const taskProject = document.querySelector('#task-project')
    removeChildren(taskProject);
    const option = document.createElement('option');
    option.value = 'default';
    option.textContent = 'Default';
    taskProject.appendChild(option);

    for(let title of project) {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        taskProject.appendChild(option);
    };
};


export function runProject(){
    addProjectMenuBtn.addEventListener('click', addProjectMenu);
    closeProjectMenu.addEventListener('click', addProjectMenu);
    addProjectBtn.addEventListener('click', addProject);
};