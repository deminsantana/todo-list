import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo, TodoStatus } from '../../interfaces/todos.interfaces';
import { formOptions } from '../../config/options';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule, DropdownComponent],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  private todosService = inject(TodosService);

  public newTodoDescription: string = '';
  public newTodoStatus: {value: TodoStatus, name: string} = formOptions[0];
  public statusOptions = formOptions;

  public addTodo() {
    const newTodo: Todo = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus.value,
      createdAt: new Date(),
    };

    this.todosService.addTodo(newTodo);

    this.newTodoDescription = '';
    this.newTodoStatus = formOptions[0];
  }

  public changeStatus(newStatus: {value: TodoStatus, name: string}) {
    this.newTodoStatus = newStatus;
  }
}
