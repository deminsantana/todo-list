import { Component, inject } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { Todo, TodoStatus } from '../../interfaces/todos.interfaces';
import { formOptions } from '../../config/options';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule, DropdownComponent, NgClass, NgIf],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  private todosService = inject(TodosService);
  private fb = inject(FormBuilder);

  public todoForm: FormGroup;
  public newTodoStatus: {value: TodoStatus, name: string} = formOptions[0];
  public statusOptions = formOptions;
  public submitted = false;

  constructor() {
    this.todoForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.noWhitespaceValidator
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        this.noWhitespaceValidator
      ]]
    });
  }

  get f() {
    return this.todoForm.controls;
  }

  // Validador personalizado para evitar espacios en blanco al principio y al final
  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && typeof control.value === 'string') {
      const isWhitespace = control.value.trim().length !== control.value.length;
      return isWhitespace ? { 'whitespace': true } : null;
    }
    return null;
  }

  public addTodo() {
    this.submitted = true;

    // Si el formulario no es válido, no continuar
    if (this.todoForm.invalid) {
      return;
    }

    const newTodo: Todo = {
      id: Math.random(),
      title: this.todoForm.value.title.trim(),
      description: this.todoForm.value.description.trim(),
      status: this.newTodoStatus.value,
      createdAt: new Date(),
    };

    this.todosService.addTodo(newTodo);

    // Resetear el formulario
    this.todoForm.reset();
    this.newTodoStatus = formOptions[0];
    this.submitted = false;
  }

  public changeStatus(newStatus: {value: TodoStatus, name: string}) {
    this.newTodoStatus = newStatus;
  }
}
