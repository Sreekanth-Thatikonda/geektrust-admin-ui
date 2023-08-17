import { createReducer, on } from '@ngrx/store';
import { AdminUser } from './adminuser.model';
import { deleteAdminUser, updateAdminUser } from './action';

export interface TodoState {
  adminUsers: AdminUser[];
  loading: boolean;
  error: string;
}
export const initialState: TodoState = {
  adminUsers: [],
  loading: false,
  error: '',
};
export const todoReducer = createReducer(
  initialState,

  on(AdminActions.loadTodos, (state) => ({ ...state, loading: true })),

  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),

  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(updateAdminUser, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  })),

  on(deleteAdminUser, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== id),
  }))
);
