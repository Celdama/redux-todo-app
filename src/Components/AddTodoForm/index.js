import React, { useRef } from 'react';
import { Form, Input, Button } from './addTodoForm.tw';

const AddTodoForm = ({ addTodo }) => {
  const inputEl = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(inputEl.current.value);
    inputEl.current.value = '';
    inputEl.current.focus();
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <Input type='text' placeholder='task' ref={inputEl} />
      <Button>
        <svg
          width='20'
          height='20'
          fill='currentColor'
          className='mr-2'
          aria-hidden='true'
        >
          <path d='M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z' />
        </svg>
        Add
      </Button>
    </Form>
  );
};

export default AddTodoForm;
