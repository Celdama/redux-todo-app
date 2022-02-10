import { TodoListStore } from './Components/TodoList';
import { Container } from './app.style.tw';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Container className='App'>
      <h1 className='text-3xl font-bold underline'>Todo List with Redux</h1>
      <TodoListStore />
      <GlobalStyle />
    </Container>
  );
}

export default App;
