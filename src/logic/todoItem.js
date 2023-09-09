export const todoItems = []

export class TodoItem{
    constructor(title,dueDate,priority,description,group){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        if(group === undefined) {
            this.group = '';
        }
        this.group = group;
    };
};