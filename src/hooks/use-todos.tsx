import { TodoItem } from '@/redux/@types/todo-slice';
import {
  selectActiveTodos,
  selectButtonType,
  selectCompletedTodos,
  selectTodos,
} from '@/redux/slices/todo-slice';
import { useAppSelector } from '@/redux/utils/hooks';
import { useEffect, useState } from 'react';

interface ReturnType {
  todos: TodoItem[];
}

const useTodos = (): ReturnType => {
  const buttonType = useAppSelector(selectButtonType);

  const allTodos = useAppSelector(selectTodos);
  const activeTodos = useAppSelector(selectActiveTodos);
  const completedTodos = useAppSelector(selectCompletedTodos);

  const [todos, setTodos] = useState<TodoItem[]>(allTodos);

  useEffect(() => {
    if (buttonType === 'active') {
      setTodos(activeTodos);
    }

    if (buttonType === 'completed') {
      setTodos(completedTodos);
    }

    if (buttonType === 'all') {
      setTodos(allTodos);
    }
  }, [allTodos, buttonType]);

  return {
    todos,
  };
};

export { useTodos };
