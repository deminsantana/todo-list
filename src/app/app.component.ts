import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './interfaces/todos.interfaces'
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Todo List';

  public todos: Todo[] = [
    {
      id: 1,
      description: 'Tarea 1',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 2,
      description: 'Tarea 2',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 3,
      description: 'Tarea 3',
      createdAt: new Date(),
      status: 'empty',
    },
  ]
}
