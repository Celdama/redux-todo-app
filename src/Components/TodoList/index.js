import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import { todosSelector } from '../../Store/selectors/todosSelector';

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export const TodoListStore = () => {
  const todos = useSelector(todosSelector);

  return <TodoList todos={todos} />;
};
