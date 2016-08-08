import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoModel } from './todo.model';

@Component({
  moduleId: module.id,
  selector: 'todo-input',
  templateUrl: 'todo-input.component.html',
  styleUrls: ['todo-input.component.css']
})
export class TodoInput {
    todoModel:TodoModel = new TodoModel();

    constructor(public todoService: TodoService) {
    }

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
        this.todoModel = new TodoModel();
    }
}