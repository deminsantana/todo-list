export interface Todo {
  id: string | number
  description: string
  status: TodoStatus
  createdAt: string | Date
}

export type TodoStatus = 'empty' | 'pendiente' | 'completado'

export type FilterStatus = TodoStatus | 'all'

export type Orders = 'newest' | 'oldest'
