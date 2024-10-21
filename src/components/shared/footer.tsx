import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { useAppDispatch, useAppSelector } from '@/redux/utils/hooks';
import {
  clearTodos,
  selectButtonType,
  selectCompletedTodos,
} from '@/redux/slices/todo-slice';
import { ButtonType } from '@/redux/@types/todo-slice';

interface FooterProps {
  onClickChange?: (type: ButtonType) => void;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className, onClickChange }) => {
  const dispatch = useAppDispatch();

  const buttonType = useAppSelector(selectButtonType);
  const completedTodos = useAppSelector(selectCompletedTodos);

  return (
    <div className={cn('flex items-center justify-between w-full', className)}>
      <span>{completedTodos.length} items completed</span>

      <div className="flex gap-4">
        <Button
          variant={buttonType === 'all' ? 'default' : 'ghost'}
          onClick={() => onClickChange?.('all')}
          className="transition-all duration-200"
        >
          All
        </Button>
        <Button
          variant={buttonType === 'active' ? 'default' : 'ghost'}
          onClick={() => onClickChange?.('active')}
          className="transition-all duration-200"
        >
          Active
        </Button>
        <Button
          variant={buttonType === 'completed' ? 'default' : 'ghost'}
          onClick={() => onClickChange?.('completed')}
          className="transition-all duration-200"
        >
          Completed
        </Button>
      </div>

      <Button variant={'outline'} onClick={() => dispatch(clearTodos())}>
        Clear completed
      </Button>
    </div>
  );
};
