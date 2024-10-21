import './App.css';
import { Footer, Header, TodoList } from './components/shared';
import { Container } from './components/shared/container';
import { setButtonType } from './redux/slices/todo-slice';
import { useAppDispatch } from './redux/utils/hooks';
import { ButtonType } from './redux/@types/todo-slice';
import { useTodos } from './hooks';

function App() {
  const dispatch = useAppDispatch();

  const { todos } = useTodos();

  const onClickChange = (type: ButtonType) => {
    dispatch(setButtonType(type));
  };

  return (
    <Container className="flex flex-col items-center gap-8">
      <Header />

      <TodoList todos={todos} />

      <Footer onClickChange={onClickChange} />
    </Container>
  );
}

export default App;
