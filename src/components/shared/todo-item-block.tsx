import { cn } from '@/lib/utils';

import React from 'react';
import { Checkbox, Label, Separator } from '../ui';
import { useAppDispatch } from '@/redux/utils/hooks';
import { toggleTodo } from '@/redux/slices/todo-slice';
import { TodoItem } from '@/redux/@types/todo-slice';

interface TodoItemBlockProps {
  className?: string;
  todo: TodoItem;
}

export const TodoItemBlock: React.FC<
  React.PropsWithChildren<TodoItemBlockProps>
> = ({ todo, className, children }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={cn('flex items-center gap-4 w-full', className)}
        onClick={() => dispatch(toggleTodo(todo))}
      >
        <Checkbox id={`id-${todo.id}`} checked={todo.completed}></Checkbox>
        <Label
          className={cn(
            todo.completed && 'line-through opacity-70',
            'text-xl text-start',
          )}
          htmlFor={`id-${todo.id}`}
        >
          {children}
        </Label>
      </div>
      <Separator />
    </>
  );
};
