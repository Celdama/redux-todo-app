import { FILTER_TODO_ACTION } from '../reducers/filterReducer';

export const setFilterAction = (value) => ({
  type: FILTER_TODO_ACTION,
  payload: value,
});
