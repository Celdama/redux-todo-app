import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => console.log('change')}
      />
      <label htmlFor=''>{todo.title}</label>
    </li>
  );
};

export default TodoItem;
