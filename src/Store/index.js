import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducer } from './reducers/todosReducer';
import { filterReducer } from './reducers/filterReducer';

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
