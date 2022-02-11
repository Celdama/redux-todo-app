import { TodoListStore } from './Components/TodoList';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './app.style.tw';

function App() {
  return (
    <Container className='outline'>
      <h1 className='font-semibold text-4xl text-slate-300 mb-16'>
        Todo List with Redux
      </h1>
      <TodoListStore />
      <GlobalStyle />
    </Container>
  );
}

export default App;
