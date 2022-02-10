import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import { todosSelector } from '../../Store/selectors/todosSelector';
import { connect } from 'react-redux';

export const TodoList = ({ todos }) => {
  return (
    <div>
      <TodoItem />
    </div>
  );
};

export const TodoListStore = () => {
  const todos = useSelector(todosSelector);

  return <TodoList todos={todos} />;
};

// export const TodoListStore = connect((state) => ({
//   todos: todosSelector(state),
// }))(TodoList);
