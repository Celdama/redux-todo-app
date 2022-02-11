import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterAction } from '../../Store/actions/filterAction';
import { filterSelector } from '../../Store/selectors/filterSelector';

export const TodoFilter = ({ filter, handleSetFilter }) => {
  return (
    <div>
      <button disabled={filter === true} onClick={() => handleSetFilter(true)}>
        completed todo
      </button>
    </div>
  );
};

export const TodoFilterStore = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handleSetFilter = useCallback(
    (value) => {
      dispatch(setFilterAction(value));
    },
    [dispatch]
  );

  return <TodoFilter filter={filter} handleSetFilter={handleSetFilter} />;
};
