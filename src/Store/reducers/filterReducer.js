export const FILTER_TODO_ACTION = 'FILTER_TODO_ACTION';

// eslint-disable-next-line default-param-last
export const filterReducer = (state = null, action) => {
  switch (action.type) {
    case FILTER_TODO_ACTION:
      return action.payload;
    default:
      return state;
  }
};
