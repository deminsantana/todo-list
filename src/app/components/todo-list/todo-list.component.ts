import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../interfaces/todos.interfaces';
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todolist?: Todo[] | null
}
