import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js"

class TodosService {
    async addTodo(todo) {
        let res = await api.post('kevin/todos', todo)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
        console.log(todo)
    }

    async getTodos() {
        let res = await api.get('kevin/todos')
        ProxyState.todos = res.data.map(s => new Todo(s))
    }

    async deleteTodo(id) {

        await api.delete('kevin/todos/' + id)
        ProxyState.todos = ProxyState.todos.filter(todo => todo.id != id)
    }
    async checkedBox(bool, id) {
        let checked = ProxyState.todos.find(t => t.id === id)
        if (checked.completed) {
            await api.put('kevin/todos/' + id, { completed: false })
            checked.completed = false
        } else {
            await api.put('kevin/todos/' + id, { completed: true })
            checked.completed = true
        }
        ProxyState.todos = ProxyState.todos
    }

}
export const todosService = new TodosService();