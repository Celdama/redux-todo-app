import React, { useState } from 'react';

import {
  TaskItem,
  ItemContainer,
  EditTaskInput,
  Checkbox,
  LabelItemTitle,
  DeleteBtn,
  EditBtn,
  SaveBtn,
  ContainerBtnItem,
} from './todoItem.tw';
const TodoItem = ({ todo, onToggle, handleDeleteTodo, handleEditTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const editTodo = ({ title }) => {
    setEditing(true);
    setNewTitle(title);
  };

  const handleNewTodoTitle = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  // const saveNewTodo = (todo, e) => {
  //   e.preventDefault();
  //   handleEditTodo({ ...todo, title: newTitle });
  //   setEditing(false);
  // };

  const saveNewTodo = (todo, e) => {
    e.preventDefault();
    handleEditTodo(todo.id, newTitle);
    setEditing(false);
  };

  const { completed, title } = todo;

  return (
    <TaskItem>
      <ItemContainer>
        <Checkbox
          type='checkbox'
          checked={completed}
          disabled={editing}
          onChange={() => onToggle(todo)}
        />
        {editing ? (
          <form onSubmit={(e) => saveNewTodo(todo, e)}>
            <EditTaskInput
              type='text'
              value={newTitle}
              onChange={handleNewTodoTitle}
            />
          </form>
        ) : (
          <LabelItemTitle
            className={completed ? 'line-through italic ' : ''}
            htmlFor=''
          >
            {title}
          </LabelItemTitle>
        )}
      </ItemContainer>
      <ContainerBtnItem>
        {editing ? (
          // <button onClick={(e) => saveNewTodo(todo, e)}>save</button>
          <SaveBtn onClick={(e) => saveNewTodo(todo, e)}>save</SaveBtn>
        ) : (
          <EditBtn disabled={completed} onClick={() => editTodo(todo)}>
            edit
          </EditBtn>
        )}
        <DeleteBtn onClick={() => handleDeleteTodo(todo)}>x</DeleteBtn>
      </ContainerBtnItem>
    </TaskItem>
  );
};

export default TodoItem;
