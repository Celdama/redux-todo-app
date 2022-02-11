import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const TodoFilter = () => {
  return (
    <div>
      <button>filter</button>
    </div>
  );
};

export const TodoFilterStore = () => {
  return <TodoFilter />;
};
