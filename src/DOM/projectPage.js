import { project } from "../logic/todoItem";
import { changeProjectPage } from "./changePage";
import { removeChildren } from "./features";
import { change } from "./changePage";
import { loadTask } from "./task";

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
        const index = project.findIndex(project => project === item);
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-name');
        const title = document.createElement('div');
        title.classList.add('project-title');
        title.textContent = item;
        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete-icon');
        deleteDiv.dataset.title = item;
        deleteDiv.addEventListener('click',() => {
            change('Inbox');
            loadTask();
            project.splice(index,1);
            projectItems.removeChild(projectItem);
            localStorage.setItem('projects',JSON.stringify(project));
        });
        projectItem.appendChild(title)
        projectItem.appendChild(deleteDiv)
        projectItems.appendChild(projectItem);
    }
}
change('Inbox');
loadTask();
function addProject(e) {
    if(inputProject.value !== '') {
        e.preventDefault();
        project.push(inputProject.value);
        inputProject.value = ''
        addProjectMenu();
        loadProjects();
        addProjectOptions();
        changeProjectPage();
        localStorage.setItem('projects', JSON.stringify(project));
    };
};

function addProjectOptions() {
    const taskProject = document.querySelector('#task-project');
    const editTaskProject = document.querySelector('#edit-task-project');
    loadProjectOnMenu(taskProject);
    loadProjectOnMenu(editTaskProject);
}

function loadProjectOnMenu(div) {
    removeChildren(div);
    const option = document.createElement('option');
    option.value = 'default';
    option.textContent = 'Default';
    div.appendChild(option);

    for(let title of project) {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        div.appendChild(option);
    };
};


export function runProject(){
    addProjectMenuBtn.addEventListener('click', addProjectMenu);
    closeProjectMenu.addEventListener('click', addProjectMenu);
    addProjectBtn.addEventListener('click', addProject);
    loadProjects();
    changeProjectPage();
};