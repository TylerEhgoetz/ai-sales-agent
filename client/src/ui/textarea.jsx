import { forwardRef } from 'react';
import { cn } from '../utils/classNames';

export const Textarea = forwardRef(({ className, ...props }, ref) => (
    <textarea
        ref={ref}
        className={cn('w-full rounded-md border p-3 text-sm', className)}
        {...props}
    />
));
Textarea.displayName = 'Textarea';
