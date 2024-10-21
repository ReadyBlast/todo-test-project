import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ButtonType, TodoItem, TodoState } from '../@types/todo-slice';

const initialState: TodoState = {
  todos: [
    {
      id: "1",
      title:
        'Somebody once told me the world is gonna roll me I ain\'t the sharpest tool in the shed She was looking kind of dumb with her finger and her thumb In the shape of an "L" on her forehead',
      completed: true,
    },
    {
      id: "2",
      title:
        'Somebody once told me the world is gonna roll me I ain\'t the sharpest tool in the shed She was looking kind of dumb with her finger and her thumb In the shape of an "L" on her forehead',
      completed: false,
    },
  ],
  buttonType: 'all',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<TodoItem>) => {
      const todo = action.payload;
      state.todos.find((t) => t.id === todo.id)!.completed = !todo.completed;
    },
    clearTodos: (state) => {
     state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setButtonType (state, action: PayloadAction<ButtonType>) {
      state.buttonType = action.payload
    }
  },
});

export const { addTodo, toggleTodo, clearTodos, setButtonType } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectButtonType = (state: RootState) => state.todos.buttonType;

export const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed),
);
export const selectActiveTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.completed),
);

export default todoSlice.reducer;
