import { removeChildren } from "./task";


export function features(){
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebarToggle.addEventListener('click', () => {
        if(sidebar.classList.contains('hidden')) {
            sidebar.classList.add('open')
        } else sidebar.classList.remove('open');        
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('expand-main')
    });
};