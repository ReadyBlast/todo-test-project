import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './slices/todo-slice';

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
