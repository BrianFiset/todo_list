const addProjectBtn = document.querySelector('.project > .add-task-icon');
const addProjectSection = document. querySelector('.add-project');
const closeProjectMenu = document.querySelector('.add-project .cancel')

function addProjectMenu() {
    addProjectSection.classList.toggle('display-none');

};

export function project(){
    addProjectBtn.addEventListener('click', addProjectMenu);
    closeProjectMenu.addEventListener('click', addProjectMenu);
};