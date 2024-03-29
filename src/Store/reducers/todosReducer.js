import { nanoid } from 'nanoid';

const initialState = [
  {
    id: nanoid(),
    title: 'task 1',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'task 2',
    completed: true,
  },
  {
    id: nanoid(),
    title: 'task 3',
    completed: false,
  },
];

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';
export const EDIT_TODO_ACTION = 'EDIT_TODO_ACTION';

// eslint-disable-next-line default-param-last
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { ...action.payload }];
    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload);
    case EDIT_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
    default:
      return state;
  }
};
