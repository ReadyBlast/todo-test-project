import React from 'react';
import { cn } from '@/lib/utils';
import { Button, Input } from '../ui';
import { useAppDispatch } from '@/redux/utils/hooks';
import { addTodo } from '@/redux/slices/todo-slice';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [value, setValue] = React.useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        title: value,
        completed: false,
      }),
    );

    setValue('');
  };

  return (
    <div className={cn('flex flex-col items-center gap-4 w-full', className)}>
      <h1 className="text-9xl font-bold">todos</h1>
      <div className="flex gap-4 items-center w-full">
        <Input
          type="text"
          placeholder="Add todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => handleSubmit()}>Add Todo</Button>
      </div>
    </div>
  );
};
