import React, { useState } from 'react';

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
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => onToggle(todo)}
      />
      {editing ? (
        <form onSubmit={(e) => saveNewTodo(todo, e)}>
          <input type='text' value={newTitle} onChange={handleNewTodoTitle} />
        </form>
      ) : (
        <label htmlFor=''>{title}</label>
      )}
      <button onClick={() => handleDeleteTodo(todo)}>x</button>
      {editing ? (
        // <button onClick={(e) => saveNewTodo(todo, e)}>save</button>
        <button onClick={(e) => saveNewTodo(todo, e)}>save</button>
      ) : (
        <button onClick={() => editTodo(todo)}>edit</button>
      )}
    </li>
  );
};

export default TodoItem;
