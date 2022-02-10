import React from 'react';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <label htmlFor=''>{todo.title}</label>
    </li>
  );
};

export default TodoItem;
