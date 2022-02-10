import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import AddTodoForm from '../AddTodoForm';
import { todosSelector } from '../../Store/selectors/todosSelector';
import {
  addTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from '../../Store/actions/todosActions';

export const TodoList = ({ todos, onToggle, handleDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            handleDeleteTodo={handleDeleteTodo}
            key={todo.id}
          />
        );
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

  const handleDeleteTodo = useCallback(
    (todo) => {
      dispatch(deleteTodoAction(todo));
    },
    [dispatch]
  );

  const addTodo = useCallback(
    (title) => {
      dispatch(addTodoAction(title));
    },
    [dispatch]
  );

  return (
    <>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        handleDeleteTodo={handleDeleteTodo}
      />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};
