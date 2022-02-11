export const FILTER_TODO_ACTION = 'FILTER_TODO_ACTION';

export const filterReducer = (state = null, action) => {
  switch (action.type) {
    case FILTER_TODO_ACTION:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
