// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './interfaces/todos.interfaces'
import { TodosService } from './services/todos.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { Subscription } from 'rxjs';
import { DatePipe } from './pipes/date.pipe';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ArrowComponent } from './components/dropdown/components/arrow.component';
import { TodoFiltersComponent } from "./components/todo-filters/todo-filters.component";
import { TodoOrdersComponent } from "./components/todo-orders/todo-orders.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, TodoListComponent, TodoFormComponent, FormsModule, TodoFiltersComponent, TodoOrdersComponent],
  standalone: true,
  providers: [TodosService, NgModule, DatePipe, TodoListItemComponent, DropdownComponent, ArrowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos?: Todo[];
  private todosService = inject(TodosService);
  private todosSubscription: Subscription;

  constructor() {
    this.todosSubscription = this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos)
    });
  }

  ngDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
