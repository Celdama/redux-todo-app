import { TodoListStore } from './Components/TodoList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>Todo List with Redux</h1>
      <TodoListStore />
    </div>
  );
}

export default App;
