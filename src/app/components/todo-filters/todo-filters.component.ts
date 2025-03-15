import { Component, inject } from '@angular/core';
import { FilterStatus } from '../../interfaces/todos.interfaces';
import { filterOptions } from '../../config/options';
import { TodosService } from '../../services/todos.service';
import { traductions } from '../../utils/traductions';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
  selector: 'app-todo-filters',
  imports: [DropdownComponent],
  templateUrl: './todo-filters.component.html',
  styleUrl: './todo-filters.component.css'
})
export class TodoFiltersComponent {
  public selectedStatus: { name: string; value: FilterStatus } =
    filterOptions[0];

  private todosService = inject(TodosService);
  public filterOptions = filterOptions;

  constructor() {
    this.todosService.filterSubject.pipe().subscribe((filter) => {
      this.selectedStatus = { name: traductions[filter], value: filter };
    });
  }

  public filterByStatus(selectedStatus: { name: string; value: FilterStatus }) {
    this.todosService.filterByStatus(selectedStatus.value);
  }
}
