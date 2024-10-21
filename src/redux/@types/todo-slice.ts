export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export type ButtonType = 'active' | 'completed' | 'all';

export interface TodoState {
  todos: TodoItem[];
  buttonType: ButtonType;
}
