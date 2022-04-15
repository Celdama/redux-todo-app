import {
  ADD_TODO_ACTION,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  EDIT_TODO_ACTION,
} from '../reducers/todosReducer';

export const addTodoAction = ({ id, title, completed }) => {
  return {
    type: ADD_TODO_ACTION,
    payload: {
      id,
      title: title.trim(),
      completed,
    },
  };
};

export const toggleTodoAction = ({ id, title, completed }) => {
  return {
    type: UPDATE_TODO_ACTION,
    payload: {
      id,
      title,
      completed: !completed,
    },
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO_ACTION,
    payload: id,
  };
};

export const editTodoAction = ({ id, title, completed }) => {
  return {
    type: EDIT_TODO_ACTION,
    payload: {
      id,
      title: title.trim(),
      completed,
    },
  };
};
