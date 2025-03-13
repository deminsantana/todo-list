import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../interfaces/todos.interfaces';

@Component({
  selector: 'app-todo-list-item',
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input() todo?: Todo
}
