import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, handleDeleteTodo, handleEditTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const editTodo = (todo) => {
    setEditing(true);
    setNewTitle(todo.title);
  };

  const handleNewTodoTitle = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  const saveNewTodo = (todo) => {
    handleEditTodo(todo, newTitle);
    setEditing(false);
    setNewTitle('');
  };

  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      {editing ? (
        <input
          type='text'
          value={newTitle}
          // ref={input}
          onChange={handleNewTodoTitle}
        />
      ) : (
        <label htmlFor=''>{todo.title}</label>
      )}
      <button onClick={() => handleDeleteTodo(todo)}>x</button>
      {editing ? (
        <button onClick={(e) => saveNewTodo(todo, e)}>save</button>
      ) : (
        <button onClick={() => editTodo(todo)}>edit</button>
      )}
    </li>
  );
};

export default TodoItem;
