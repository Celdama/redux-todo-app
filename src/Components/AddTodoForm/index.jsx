import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button } from './addTodoForm.tw';

const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    completed: false,
  });

  const handleChangeTitleTodo = (e) => {
    const { value, name } = e.target;

    setNewTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.title) {
      addTodo({
        id: nanoid(),
        ...newTodo,
      });

      setNewTodo({
        title: '',
        completed: false,
      });
    }
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <Input
        type="text"
        name="title"
        value={newTodo.title}
        placeholder="add task and press enter"
        onChange={handleChangeTitleTodo}
      />
      <Button>
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="mr-2"
          aria-hidden="true"
        >
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        Add
      </Button>
    </Form>
  );
};

export default AddTodoForm;
