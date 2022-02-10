import React from 'react';

const TodoItem = ({ todo, onToggle, handleDeleteTodo }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <label htmlFor=''>{todo.title}</label>
      <button onClick={() => handleDeleteTodo(todo)}>x</button>
    </li>
  );
};

export default TodoItem;
