import { TodoListStore } from './Components/TodoList';
import { GlobalStyle } from './GlobalStyle';
import { Container, TitleApp } from './app.style.tw';

function App() {
  return (
    <Container>
      <TitleApp>Todo List with Redux</TitleApp>
      <TodoListStore />
      <GlobalStyle />
    </Container>
  );
}

export default App;
