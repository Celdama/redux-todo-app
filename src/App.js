import { TodoListStore } from './Components/TodoList';
import { GlobalStyle } from './GlobalStyle';
import { Container, TitleApp } from './app.style.tw';
import { TodoFilterStore } from './Components/TodoFilter';

function App() {
  return (
    <Container>
      <TitleApp>Todo List with Redux</TitleApp>
      <TodoListStore />
      <TodoFilterStore />
      <GlobalStyle />
    </Container>
  );
}

export default App;
