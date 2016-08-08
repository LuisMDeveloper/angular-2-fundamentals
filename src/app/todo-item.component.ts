import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-item',
  encapsulation: ViewEncapsulation.None,
  template: `
  <style>
    .completed {
      text-decoration: line-through;
    }
  </style>
  <div>
    <span [ngClass]="todo.status">{{todo.title}}</span>
    <button (click)="todo.toggle()">O</button>
  </div>`
})
export class TodoItem {
  @Input() todo;
}