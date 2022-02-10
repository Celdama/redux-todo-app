import React, { useRef } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const inputEl = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(inputEl.current.value);
    inputEl.current.value = '';
    inputEl.current.focus();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type='text' placeholder='task' ref={inputEl} />
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
