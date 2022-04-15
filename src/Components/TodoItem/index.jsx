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

  const saveNewTodoTitle = (currentTodo) => {
    handleEditTodo({ ...currentTodo, title: newTitle });
    setEditing(false);
  };

  const { completed, title, id } = todo;

  return (
    <TaskItem>
      <ItemContainer>
        <Checkbox
          type="checkbox"
          checked={completed}
          disabled={editing}
          onChange={() => onToggle(todo)}
        />
        {editing ? (
          <form onSubmit={() => saveNewTodoTitle(todo)}>
            <EditTaskInput
              type="text"
              value={newTitle}
              onChange={handleNewTodoTitle}
            />
          </form>
        ) : (
          <LabelItemTitle
            className={completed ? 'line-through italic ' : ''}
            htmlFor="title"
          >
            {title}
          </LabelItemTitle>
        )}
      </ItemContainer>
      <ContainerBtnItem>
        {editing ? (
          <SaveBtn onClick={() => saveNewTodoTitle(todo)}>save</SaveBtn>
        ) : (
          <EditBtn disabled={completed} onClick={() => editTodo(todo)}>
            edit
          </EditBtn>
        )}
        <DeleteBtn onClick={() => handleDeleteTodo(id)}>x</DeleteBtn>
      </ContainerBtnItem>
    </TaskItem>
  );
};

export default TodoItem;
