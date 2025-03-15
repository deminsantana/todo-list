import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '../../pipes/date.pipe';
import { Todo, TodoStatus } from '../../interfaces/todos.interfaces';
import { TodosService } from '../../services/todos.service';
import { formOptions } from '../../config/options';
import { traductions } from '../../utils/traductions';
import { DropdownComponent } from "../dropdown/dropdown.component";


@Component({
  selector: 'app-todo-list-item',
  imports: [CommonModule, DatePipe, DropdownComponent],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input() todo?: Todo;

  private todosService = inject(TodosService);
  public statusOptions = formOptions;

  get optionSelected() {
    return { value: this.todo?.status, name: traductions[this.todo?.status!] };
  }

  public removeTodo() {
    if(!this.todo) return;
    this.todosService.removeTodo(this.todo.id);
  }

  public changeStatus(newStatus: {value: TodoStatus, name: string}) {
    if(this.todo?.id) {
      this.todosService.changeTodoStatus(this.todo.id, newStatus.value);
    }
  }
}
