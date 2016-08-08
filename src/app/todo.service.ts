import {Injectable} from '@angular/core';
import {TodoModel} from './todo.model';

@Injectable()
export class TodoService {
    todos = [
        new TodoModel("Task 1"),
        new TodoModel("Task 2"),
        new TodoModel("sleep")
    ];

    addTodo(todo: TodoModel) {
        this.todos = [...this.todos, todo]
    }
}