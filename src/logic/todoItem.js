export const todoItems = [];
export const project = [];

export class TodoItem{
    constructor(title,dueDate,priority,description,project){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.project = project;
    };
};