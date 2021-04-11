import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


function _drawTodo() {
    let todos = ProxyState.todos
    let remaining = todos.filter(t => t.completed == false).length
    let template = ''
    template += `<div class="d-flex justify-content-end mr-2 txt-shadow"><small>${remaining}</small></div>`
    todos.forEach(t => template += t.todoTemplate)
    document.getElementById('todo').innerHTML = template
}

//Public
export default class TodosController {
    constructor() {
        ProxyState.on("todos", _drawTodo)
        this.getTodos()
    }

    async addTodo() {
        window.event.preventDefault()
        let form = window.event.target
        let todoData = {
            description: form['description'].value,
        }
        await todosService.addTodo(todoData)
        form.reset()
    }
    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error(error)
        }
    }
    async deleteTodo(id) {
        try {
            await todosService.deleteTodo(id)
        } catch (error) {
            console.error(error)
        }
    }

    async checkedBox(bool, id) {
        try {
            todosService.checkedBox(bool, id)

        } catch (error) {
            console.error(error)
        }
    }

}