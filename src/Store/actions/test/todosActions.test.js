import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {
  addTodoAction,
  editTodoAction,
  toggleTodoAction,
  deleteTodoAction,
} from '../todosActions';

// addTodoAction

// tester si title est vide / null
// tester si title est 4000000 length
// tester si title est une image
// tester si title <sxript>alert('ko')</script>

const fakeTodo = {
  id: '1234',
  title: ' acheter du lait ',
  completed: false,
};

const fakeExpectTodo = {
  id: '1234',
  title: 'acheter du lait',
  completed: false,
};

describe('first test', () => {
  it('this is my first test', () => {
    const result = addTodoAction({
      id: '1234',
      title: 'acheter du lait',
      completed: false,
    });
    expect(result).toStrictEqual({
      payload: {
        id: '1234',
        title: 'acheter du lait',
        completed: false,
      },
      type: 'ADD_TODO_ACTION',
    });
  });
});

describe('no empty space in title todo', () => {
  it('no leading/trailing space in title todo', () => {
    const addTodoResult = addTodoAction(fakeTodo);
    expect(addTodoResult).toStrictEqual({
      payload: fakeExpectTodo,
      type: 'ADD_TODO_ACTION',
    });

    const editTodoResult = editTodoAction(fakeTodo);
    expect(editTodoResult).toStrictEqual({
      payload: fakeExpectTodo,
      type: 'EDIT_TODO_ACTION',
    });
  });
});

describe('toggle todo completed or not', () => {
  it('set todo completed', () => {
    const completeTodoResult = toggleTodoAction(fakeTodo);
    expect(completeTodoResult).toStrictEqual({
      payload: {
        ...fakeTodo,
        completed: true,
      },
      type: 'UPDATE_TODO_ACTION',
    });
  });

  it('set todo uncompleted', () => {
    const uncompleteTodoResult = toggleTodoAction({
      ...fakeTodo,
      completed: true,
    });
    expect(uncompleteTodoResult).toStrictEqual({
      payload: {
        ...fakeTodo,
        completed: false,
      },
      type: 'UPDATE_TODO_ACTION',
    });
  });
});

describe('delete todo with todo id', () => {
  it('get correct delete todo id', () => {
    const deleteTodoResult = deleteTodoAction(fakeTodo.id);
    expect(deleteTodoResult).toStrictEqual({
      payload: '1234',
      type: 'DELETE_TODO_ACTION',
    });
  });
});
