import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Orders } from '../../interfaces/todos.interfaces';
import { orderOptions } from '../../config/options';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
  selector: 'app-todo-orders',
  imports: [DropdownComponent],
  templateUrl: './todo-orders.component.html',
  styleUrl: './todo-orders.component.css'
})
export class TodoOrdersComponent {
  private todosService = inject(TodosService);

  public selectedOrder: { value: Orders, name: string } = orderOptions[0];
  public orderOptions = orderOptions;

  orderByDate(selectedOrder: { value: Orders, name: string }) {
    this.selectedOrder = selectedOrder;
    this.todosService.orderByDate(selectedOrder.value);
  }
}
