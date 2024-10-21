import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('container mx-auto sm:px-6 lg:px-8 xl:px-0 max-w-[1280px]', className)}>
      {children}
    </div>
  );
};
