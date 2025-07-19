import React from 'react';
import ContainerProps from './Container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Button } from '@/components/tasks/Button';
import { Grip } from 'lucide-react';

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'w-full h-full p-4 bg-gray-50 dark:bg-gray-800 rounded-xl flex flex-col gap-y-4 border border-gray-200 dark:border-gray-700',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 dark:text-gray-100 text-xl">{title}</h1>
          <p className="text-gray-400 dark:text-gray-400 text-sm">{description}</p>
        </div>
        <button
          className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center"
          {...listeners}
          aria-label="Drag Handle"
        >
          <Grip className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {children}
      <Button variant="ghost" onClick={onAddItem}>
        Add Item
      </Button>
    </div>
  );
};

export default Container;