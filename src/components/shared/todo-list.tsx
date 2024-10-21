import React from 'react';
import { TodoItemBlock } from './todo-item-block';
import { cn } from '@/lib/utils';
import { TodoItem } from '@/redux/@types/todo-slice';

interface TodoListProps {
  className?: string;
  todos: TodoItem[];
}

export const TodoList: React.FC<TodoListProps> = ({ className, todos }) => {
  return (
    <div className={cn('flex flex-col items-center gap-8 w-full', className)}>
      {todos.length === 0 ? (
        <h2 className="text-xl opacity-20 h-[200px]">There is nothing here</h2>
      ) : (
        todos.map((todo) => (
          <TodoItemBlock key={todo.id} className="w-full" todo={todo}>
            {todo.title}
          </TodoItemBlock>
        ))
      )}
    </div>
  );
};
