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

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: nanoid(), completed: false, ...action.payload }];
    default:
      return state;
  }
};
