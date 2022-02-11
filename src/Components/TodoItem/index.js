import React, { useState } from 'react';

import {
  TaskItem,
  ItemContainer,
  EditTaskInput,
  Checkbox,
  DeleteBtn,
  EditBtn,
  SaveBtn,
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
          <form className='block' onSubmit={(e) => saveNewTodo(todo, e)}>
            <EditTaskInput
              type='text'
              value={newTitle}
              onChange={handleNewTodoTitle}
            />
          </form>
        ) : (
          <label
            className={
              completed ? 'line-through italic pr-12 pl-7' : 'pr-12 pl-7 '
            }
            htmlFor=''
          >
            {title}
          </label>
        )}
      </ItemContainer>
      <div className='flex'>
        {editing ? (
          // <button onClick={(e) => saveNewTodo(todo, e)}>save</button>
          <SaveBtn onClick={(e) => saveNewTodo(todo, e)}>save</SaveBtn>
        ) : (
          <EditBtn disabled={completed} onClick={() => editTodo(todo)}>
            edit
          </EditBtn>
        )}
        <DeleteBtn onClick={() => handleDeleteTodo(todo)}>x</DeleteBtn>
      </div>
    </TaskItem>
  );
};

export default TodoItem;
