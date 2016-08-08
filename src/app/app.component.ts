import { Component } from '@angular/core';
import { TodoInput } from './todo-input.component';
import { TodoList } from './todo-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [TodoInput, TodoList],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
