/* global test, expect */

import '@testing-library/jest-dom';
import {
  todosReducer,
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
} from '../todosReducer';

const initialState = [
  {
    id: '1234',
    title: 'task 1',
    completed: false,
  },
];

test('should return the initial state', () => {
  expect(todosReducer(initialState, {})).toEqual([
    {
      id: '1234',
      title: 'task 1',
      completed: false,
    },
  ]);
});

test('should add new todo to state', () => {
  const emptyState = [];
  expect(
    todosReducer(emptyState, {
      type: ADD_TODO_ACTION,
      payload: {
        id: '1234',
        title: 'test',
        completed: false,
      },
    })
  ).toEqual([
    {
      id: '1234',
      title: 'test',
      completed: false,
    },
  ]);
});

test('should add new todo to state without empty space', () => {
  const emptyState = [];
  expect(
    todosReducer(emptyState, {
      type: ADD_TODO_ACTION,
      payload: {
        id: '1234',
        title: 'test',
        completed: false,
      },
    })
  ).toEqual([
    {
      id: '1234',
      title: 'test',
      completed: false,
    },
  ]);
});

test('should delete todo with id', () => {
  const state = [
    {
      id: '1234',
      title: 'task 1',
      completed: false,
    },
    {
      id: '234443',
      title: 'task 2',
      completed: true,
    },
    {
      id: '2ZZEF443',
      title: 'task 3',
      completed: true,
    },
  ];
  expect(
    todosReducer(state, {
      type: DELETE_TODO_ACTION,
      payload: '234443',
    })
  ).toEqual([
    {
      id: '1234',
      title: 'task 1',
      completed: false,
    },
    {
      id: '2ZZEF443',
      title: 'task 3',
      completed: true,
    },
  ]);
});
