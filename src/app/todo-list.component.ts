import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoItem } from './todo-item.component';
import { SearchPipe } from './search.pipe'

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  pipes: [ SearchPipe ],
  directives: [TodoItem],
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoList {
    constructor(public todoService: TodoService) {
    }
}