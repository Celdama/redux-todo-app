import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import { todosSelector } from '../../Store/selectors/todosSelector';
import { toggleTodoAction } from '../../Store/actions/todosActions';

export const TodoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />;
      })}
    </ul>
  );
};

export const TodoListStore = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const onToggle = useCallback(
    (todo) => {
      dispatch(toggleTodoAction(todo));
    },
    [dispatch]
  );

  return <TodoList todos={todos} onToggle={onToggle} />;
};
