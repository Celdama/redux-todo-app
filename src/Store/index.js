import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todosReducer } from './reducers/todosReducer';
import { filterReducer } from './reducers/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const store = createStore(
//   todosReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(
//   {
//     todos: todosReducer,
//   },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
