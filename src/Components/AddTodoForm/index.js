import React, { useRef } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const inputEl = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(inputEl.current.value);
    addTodo(inputEl.current.value);
    inputEl.current.value = '';
    inputEl.current.focus();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type='text' placeholder='add todo' id='' ref={inputEl} />
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
