import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import AddTodoForm from '../AddTodoForm';
import { todosSelector } from '../../Store/selectors/todosSelector';
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction,
} from '../../Store/actions/todosActions';

export const TodoList = ({
  todos,
  onToggle,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  return (
    <ul className='w-full'>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            handleDeleteTodo={handleDeleteTodo}
            key={todo.id}
            handleEditTodo={handleEditTodo}
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

  const handleEditTodo = useCallback(
    (todo, newTitle) => {
      dispatch(editTodoAction(todo, newTitle));
    },
    [dispatch]
  );

  return (
    <div className='w-96'>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};
