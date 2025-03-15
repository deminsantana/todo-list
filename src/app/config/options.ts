import { FilterStatus, TodoStatus, Orders } from '../interfaces/todos.interfaces';
import { traductions } from '../utils/traductions';

export const formOptions: {name: string, value: TodoStatus}[]= [
  {value: 'empty', name: traductions['empty']},
  {value: 'pendiente', name: traductions['pendiente']},
  {value: 'completado', name: traductions['completado']},
];

export const filterOptions: {name: string, value: FilterStatus }[]= [
  {value: 'all', name: traductions['all']},
  ...formOptions,
]

export const orderOptions: {name: string, value: Orders}[]= [
  {value: 'newest', name: 'Más recientes' },
  {value: 'oldest', name: 'Más vieja' },
]
