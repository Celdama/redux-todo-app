import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import AddTodoForm from '../AddTodoForm';
import { filteredTodosSelector } from '../../Store/selectors/todosSelector';
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction,
} from '../../Store/actions/todosActions';
import { Container, ListItem } from './todoList.tw';

export const TodoList = ({
  todos,
  onToggle,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  return (
    <ListItem>
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
    </ListItem>
  );
};

export const TodoListStore = () => {
  const todos = useSelector(filteredTodosSelector);
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
    <Container>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <AddTodoForm addTodo={addTodo} />
    </Container>
  );
};
