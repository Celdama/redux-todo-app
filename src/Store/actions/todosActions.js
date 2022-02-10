import {
  ADD_TODO_ACTION,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  EDIT_TODO_ACTION,
} from '../reducers/todosReducer';

export const addTodoAction = (title) => ({
  type: ADD_TODO_ACTION,
  payload: { title },
});

export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: { ...todo, completed: !todo.completed },
});

export const deleteTodoAction = (todo) => ({
  type: DELETE_TODO_ACTION,
  payload: todo,
});

export const editTodoAction = (todo, newTitle) => ({
  type: EDIT_TODO_ACTION,
  payload: { ...todo, title: newTitle },
});
