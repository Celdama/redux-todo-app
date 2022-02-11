import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterAction } from '../../Store/actions/filterAction';
import { filterSelector } from '../../Store/selectors/filterSelector';
import { Button } from './todoFilter.tw';

export const TodoFilter = ({ filter, handleSetFilter }) => {
  return (
    <div>
      <Button disabled={filter === true} onClick={() => handleSetFilter(true)}>
        no filter
      </Button>
      <Button>todo</Button>
      <Button>done</Button>
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
