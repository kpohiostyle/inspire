import { ProxyState } from "../AppState.js"


export default class Todo {
    constructor({ description, completed, id }) {
        this.description = description
        this.completed = completed
        this.id = id

    }

    get todoTemplate() {
        return/*html*/ `
                <div class="col input-group-text text-wrap transparent todo">
                    <input type="checkbox" id = 'checkbox' onclick="app.todosController.checkedBox(this.completed, '${this.id}')" ${this.completed ? 'checked' : ''} aria-label="Checkbox for following text input">
                    <li class="pr-1 list">${this.description}</li><i class="fas fa-times ml-2 icon" onclick="app.todosController.deleteTodo
                    ('${this.id}')"></i>
                </div>                       
             `

    }

}