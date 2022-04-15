import { FILTER_TODO_ACTION } from '../reducers/filterReducer';

const setFilterAction = (value) => ({
  type: FILTER_TODO_ACTION,
  payload: value,
});

export default setFilterAction;
